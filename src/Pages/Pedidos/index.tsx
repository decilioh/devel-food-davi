// Orders.tsx
import Card from './components/Card';
import { useDrop } from 'react-dnd';
import { ColumnTitle, MainContainer, TableColumn, TableContainer } from './orders.styles';
import { useContext, useEffect, useState } from 'react';
import { IOrder, mockOrders, StatusPedido } from '../../mocks/orders';
import { ModalContext, ModalContextProps } from '../../context/modalContext';
import { toast } from 'react-toastify';


const Orders = () => {
  const { openModal, setConfirmAction } = useContext(ModalContext) as ModalContextProps;

  const [boardWaiting, setBoardWaiting] = useState<Array<IOrder>>(
    mockOrders.filter((item) => item.status_pedido === "AGUARDANDO_CONFIRMACAO")
  );
  const [boardPreparing, setBoardPreparing] = useState<Array<IOrder>>(
    mockOrders.filter((item) => item.status_pedido === "EM_PREPARO")
  );
  const [boardOnTheWay, setBoardOnTheWay] = useState<Array<IOrder>>(
    mockOrders.filter((item) => item.status_pedido === "SAIU_PARA_ENTREGA")
  );
  const [boardDelivered, setBoardDelivered] = useState<Array<IOrder>>(
    mockOrders.filter((item) => item.status_pedido === "ENTREGUE")
  );

  const handleInvalidDrop = (item: IOrder, targetStatus: string) => {
    const statusPedido = checkStatus(targetStatus);
    if (statusPedido === "AGUARDANDO_CONFIRMACAO" ||
        (statusPedido === "EM_PREPARO" && (item.status_pedido === "SAIU_PARA_ENTREGA" || item.status_pedido === "ENTREGUE")) ||
        (statusPedido === "SAIU_PARA_ENTREGA" && item.status_pedido === "ENTREGUE")) {
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
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [, dropPreparing] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: IOrder) => {
      if (handleInvalidDrop(item, 'preparing')) return;
      setConfirmAction(() => handleDrop(item, 'preparing'));
      openModal();
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [, dropOnTheWay] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: IOrder) => {
      if (handleInvalidDrop(item, 'onTheWay')) return;
      setConfirmAction(() => handleDrop(item, 'onTheWay'));
      openModal();
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [, dropDelivered] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: IOrder) => {
      if (handleInvalidDrop(item, 'delivered')) return;
      setConfirmAction(() => handleDrop(item, 'delivered'));
      openModal();
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleDrop = (item: IOrder, status: string) => {
    const statusPedido = checkStatus(status);
    switch (statusPedido) {
      case "AGUARDANDO_CONFIRMACAO":
        return toast.error("Não é possível mover para uma etapa anterior!");
      case "EM_PREPARO":
        if (item.status_pedido === "SAIU_PARA_ENTREGA" || item.status_pedido === "ENTREGUE") {
          return toast.error("Não é possível mover para uma etapa anterior!");
        }
        const itemEmPreparo: IOrder = { ...item, status_pedido: statusPedido };
        setBoardPreparing((prev) => [...prev, itemEmPreparo]);
        deleteFromStatusArray(item);
        break;
      case "ENTREGUE":
        const itemEntregue: IOrder = { ...item, status_pedido: statusPedido };
        setBoardDelivered((prev) => [...prev, itemEntregue]);
        deleteFromStatusArray(item);
        break;
      case "SAIU_PARA_ENTREGA":
        if (item.status_pedido === "ENTREGUE") {
          return toast.error("Não é possível mover para uma etapa anterior!");
        }
        const itemSaiuParaEntrega: IOrder = { ...item, status_pedido: statusPedido };
        setBoardOnTheWay((prev) => [...prev, itemSaiuParaEntrega]);
        deleteFromStatusArray(item);
        break;
    }
  };

  const deleteFromStatusArray = (item: IOrder) => {
    switch (item.status_pedido) {
      case "AGUARDANDO_CONFIRMACAO":
        setBoardWaiting((prev) => prev.filter((dados: IOrder) => dados.id !== item.id));
        break;
      case "EM_PREPARO":
        setBoardPreparing((prev) => prev.filter((dados: IOrder) => dados.id !== item.id));
        break;
      case "ENTREGUE":
        setBoardDelivered((prev) => prev.filter((dados: IOrder) => dados.id !== item.id));
        break;
      case "SAIU_PARA_ENTREGA":
        setBoardOnTheWay((prev) => prev.filter((dados: IOrder) => dados.id !== item.id));
        break;
    }
  };

  const checkStatus = (status: string) => {
    switch (status) {
      case 'waiting':
        return "AGUARDANDO_CONFIRMACAO";
      case 'preparing':
        return "EM_PREPARO";
      case 'onTheWay':
        return "SAIU_PARA_ENTREGA";
      case 'delivered':
        return "ENTREGUE";
    }
  };

  return (
    <MainContainer className="orders-page">
      <h2>Seus pedidos</h2>
      <TableContainer>
        <TableColumn ref={dropWaiting}>
          <ColumnTitle>Esperando Aceitação</ColumnTitle>
          {boardWaiting.map((item: IOrder) => (
            <Card 
              data={item.data_pedido}
              nome={item.nome_pedido}
              observacao={item.obs_pedido}
              preco={item.valor_pedido}
              qtd={item.qtd_pedido}
              key={item.id}
              id={item.id}
              status={item.status_pedido}
            />
          ))}
        </TableColumn>
        <TableColumn ref={dropPreparing}>
          <ColumnTitle>Em Preparo</ColumnTitle>
          {boardPreparing.map((item: IOrder) => (
            <Card 
              data={item.data_pedido}
              nome={item.nome_pedido}
              observacao={item.obs_pedido}
              preco={item.valor_pedido}
              qtd={item.qtd_pedido}
              key={item.id}
              id={item.id}
              status={item.status_pedido}
            />
          ))}
        </TableColumn>
        <TableColumn ref={dropOnTheWay}>
          <ColumnTitle>Em Rota</ColumnTitle>
          {boardOnTheWay.map((item: IOrder) => (
            <Card 
              data={item.data_pedido}
              nome={item.nome_pedido}
              observacao={item.obs_pedido}
              preco={item.valor_pedido}
              qtd={item.qtd_pedido}
              key={item.id}
              id={item.id}
              status={item.status_pedido}
            />
          ))}
        </TableColumn>
        <TableColumn ref={dropDelivered}>
          <ColumnTitle>Entregue</ColumnTitle>
          {boardDelivered.map((item: IOrder) => (
            <Card 
              data={item.data_pedido}
              nome={item.nome_pedido}
              observacao={item.obs_pedido}
              preco={item.valor_pedido}
              qtd={item.qtd_pedido}
              key={item.id}
              id={item.id}
              status={item.status_pedido}
            />
          ))}
        </TableColumn>
      </TableContainer>
    </MainContainer>
  );
};

export default Orders;