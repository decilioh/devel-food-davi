// Orders.tsx
import React, { useContext, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { ColumnTitle, ContainerTitle, MainContainer, TableColumn, TableContainer } from './orders.styles';
import { IOrder, StatusPedido } from '../../mocks/orders';
import { ModalContext, ModalContextProps } from '../../context/modalContext';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { getAllOrders } from '../../services/orders/getAllOrders';
import { AuthContext, IAuthContextFunctions } from '../../context/authContext';
import { jwtDecode } from 'jwt-decode';
import Card from './components/Card'; // Importando o Card
import { putOrder } from '../../services/orders/putOrder';
import Loader from '../../components/common/Loader';
import { ThemeContext } from '../../context/themeContext';
import { IoReload } from 'react-icons/io5';

const Orders = () => {
  const { openModal, setConfirmAction } = useContext(ModalContext) as ModalContextProps;
  const { token } = useContext(AuthContext) as IAuthContextFunctions;
  if (!token) return null;

  const [orders, setOrders] = useState<Array<IOrder>>([]);
  const [boardWaiting, setBoardWaiting] = useState<Array<IOrder>>([]);
  const [boardPreparing, setBoardPreparing] = useState<Array<IOrder>>([]);
  const [boardOnTheWay, setBoardOnTheWay] = useState<Array<IOrder>>([]);
  const [boardDelivered, setBoardDelivered] = useState<Array<IOrder>>([]);
  const [loading, setLoading] = useState(true)
  const theme = useContext(ThemeContext)
  const [reFetch, setRefetch] = useState(false)


  const handleInvalidDrop = (item: IOrder, targetStatus: string) => {
    const status = checkStatus(targetStatus);
    if (
      status === "AGUARDANDO_CONFIRMACAO" ||
      (status === "EM_PREPARO" && (item.status === "SAIU_PARA_ENTREGA" || item.status === "ENTREGUE")) ||
      (status === "SAIU_PARA_ENTREGA" && item.status === "ENTREGUE")
    ) {
      return toast.error("Não é possível mover para uma etapa anterior!");
    }
    return false;
  };

  const [, dropWaiting] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: IOrder) => {
      if (handleInvalidDrop(item, 'waiting')) return;
      setConfirmAction(() => handleDrop(item, 'waiting'));
      openModal();
    },
  }));

  const [, dropPreparing] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: IOrder) => {
      if (handleInvalidDrop(item, 'preparing')) return;
      console.log("ola")
      setConfirmAction(() => handleDrop(item, 'preparing'));
      openModal();
    },
  }));

  const [, dropOnTheWay] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: IOrder) => {
      if (handleInvalidDrop(item, 'onTheWay')) return;
      setConfirmAction(() => handleDrop(item, 'onTheWay'));
      openModal();
    },
  }));

  const [, dropDelivered] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: IOrder) => {
      if (handleInvalidDrop(item, 'delivered')) return;
      setConfirmAction(() => handleDrop(item, 'delivered'));
      openModal();
    },
  }));

  async function putOrders(status: StatusPedido, id: number) {
    try {
      setLoading(true)
      if (!token) return null;
      await putOrder(token, id.toString(), status)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error("Ocorreu algum erro!")
    }
  }

  const handleDrop = async(item: IOrder, status: string) => {
    const statusPedido = checkStatus(status);
    if (handleInvalidDrop(item, status)) return;

    const updatedItem: IOrder = { ...item, status: statusPedido };
    deleteFromStatusArray(item);

    console.log(statusPedido)

    switch (statusPedido) {
      case "EM_PREPARO":
        console.log('Item dropped em preparo:', item);
        setBoardPreparing((prev) => [...prev, updatedItem]);
        await putOrders(statusPedido, item.orderId)
        break;
      case "SAIU_PARA_ENTREGA":
        console.log('Item dropped em rota:', item);
        setBoardOnTheWay((prev) => [...prev, updatedItem]);
        await putOrders(statusPedido, item.orderId)
        break;
      case "ENTREGUE":
        console.log('Item dropped em entregue:', item);
        setBoardDelivered((prev) => [...prev, updatedItem]);
        await putOrders(statusPedido, item.orderId)
        break;
      default:
        console.log('Item dropped em espera:', item);
        setBoardWaiting((prev) => [...prev, updatedItem]);
        await putOrders(statusPedido, item.orderId)
        break;
    }
  };

  const deleteFromStatusArray = (item: IOrder) => {
    switch (item.status) {
      case "AGUARDANDO_CONFIRMACAO":
        setBoardWaiting((prev) => prev.filter((order) => order.orderId !== item.orderId));
        break;
      case "EM_PREPARO":
        setBoardPreparing((prev) => prev.filter((order) => order.orderId !== item.orderId));
        break;
      case "SAIU_PARA_ENTREGA":
        setBoardOnTheWay((prev) => prev.filter((order) => order.orderId !== item.orderId));
        break;
      case "ENTREGUE":
        setBoardDelivered((prev) => prev.filter((order) => order.orderId !== item.orderId));
        break;
    }
  };

  const checkStatus = (status: string): StatusPedido => {
    switch (status) {
      case 'waiting':
        return "AGUARDANDO_CONFIRMACAO";
      case 'preparing':
        return "EM_PREPARO";
      case 'onTheWay':
        return "SAIU_PARA_ENTREGA";
      case 'delivered':
        return "ENTREGUE";
      default:
        return "AGUARDANDO_CONFIRMACAO";
    }
  };

  useEffect(() => {
    const decoded = jwtDecode(token);
    const fetchData = async () => {
      try {
        const data = await getAllOrders(token, decoded.sub);
        setOrders(data);
        console.log(data)
        setBoardWaiting(data.filter((item: IOrder) => item.status === "AGUARDANDO_CONFIRMACAO"));
        setBoardPreparing(data.filter((item: IOrder) => item.status === "EM_PREPARO"));
        setBoardOnTheWay(data.filter((item: IOrder) => item.status === "SAIU_PARA_ENTREGA"));
        setBoardDelivered(data.filter((item: IOrder) => item.status === "ENTREGUE"));
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error("Ocorreu um erro ao selecionar os pedidos");
      }
    };
    fetchData();
  }, [token, reFetch]);

  if (loading) {
    return <Loader theme={theme}/>; // ou qualquer outro componente de loading
  }

  return (
    <MainContainer className="orders-page">
      <h2>Seus pedidos
      <IoReload size={40} 
        style={{ margin: "auto", cursor: "pointer"}}
        onClick={() => setRefetch(prev => !prev)}
       />
      </h2>
      
      <TableContainer>
        <ContainerTitle>
          <ColumnTitle>Esperando Aceitação</ColumnTitle>
          <TableColumn ref={dropWaiting}>
            {boardWaiting.map((item: IOrder) => (
              <Card key={item.orderId} order={item} />
            ))}
          </TableColumn>
        </ContainerTitle>

        <ContainerTitle>
          <ColumnTitle>Em Preparo</ColumnTitle>
          <TableColumn ref={dropPreparing}>
            {boardPreparing.map((item: IOrder) => (
              <Card key={item.orderId} order={item} />
            ))}
          </TableColumn>
        </ContainerTitle>

        <ContainerTitle>
          <ColumnTitle>Saindo para Entrega</ColumnTitle>
          <TableColumn ref={dropOnTheWay}>
            {boardOnTheWay.map((item: IOrder) => (
              <Card key={item.orderId} order={item} />
            ))}
          </TableColumn>
        </ContainerTitle>

        <ContainerTitle>
          <ColumnTitle>Entregues</ColumnTitle>
          <TableColumn ref={dropDelivered}>
            {boardDelivered.map((item: IOrder) => (
              <Card key={item.orderId} order={item} />
            ))}
          </TableColumn>
        </ContainerTitle>
      </TableContainer>
    </MainContainer>
  );

};

export default Orders;