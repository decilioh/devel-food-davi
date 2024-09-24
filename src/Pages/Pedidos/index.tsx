// Orders.tsx
import Card from './components/Card';
import { useDrop } from 'react-dnd';
import { ColumnTitle, MainContainer, TableColumn, TableContainer } from './orders.styles';
import { useEffect, useState } from 'react';
import { IOrder, mockOrders, StatusPedido } from '../../mocks/orders';


const Orders = () => {
  const [boardWaiting, setBoardWaiting] = useState<Array<IOrder>>(
    mockOrders.filter((item) => item.status_pedido === "AGUARDANDO_CONFIRMACAO")
  )
  const [boardPreparing, setBoardPreparing] = useState<Array<IOrder>>(
    mockOrders.filter((item) => item.status_pedido === "EM_PREPARO")
  )
  const [boardOnTheWay, setBoardOnTheWay] = useState<Array<IOrder>>(
    mockOrders.filter((item) => item.status_pedido === "SAIU_PARA_ENTREGA")
  )
  const [boardDelivered, setBoardDelivered] = useState<Array<IOrder>>(
    mockOrders.filter((item) => item.status_pedido === "ENTREGUE")

  )

  const [, dropWaiting] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: IOrder) => handleDrop(item, 'waiting'),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [, dropPreparing] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: IOrder) => handleDrop(item, 'preparing'),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [, dropOnTheWay] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: IOrder) => handleDrop(item, 'onTheWay'),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [, dropDelivered] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: IOrder) => handleDrop(item, 'delivered'),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));


  const handleDrop = (item: IOrder, status: string) => {
    const statusPedido = checkStatus(status)
    switch (statusPedido){
      case "AGUARDANDO_CONFIRMACAO":
        console.log(item)
        setBoardWaiting((prev) => {
          console.log(prev)
          return [...prev, item]
        })
        break
      case "EM_PREPARO":
        setBoardPreparing((prev) => [...prev, item])
        break
      case "ENTREGUE":
        setBoardDelivered((prev) => [...prev, item])
        break
      case "SAIU_PARA_ENTREGA":
        setBoardOnTheWay((prev) => [...prev, item])
        break
    }
  };

  const checkStatus = (status: string) => {
    switch (status) {
      case 'waiting':
        return "AGUARDANDO_CONFIRMACAO"
      case 'preparing':
        return "EM_PREPARO"
      case 'onTheWay':
        return "SAIU_PARA_ENTREGA"
      case  'delivered':
        return "ENTREGUE"
    }
  } 

  

  return (
    <MainContainer className='orders-page'>
      <h2>Seus pedidos</h2>
      <TableContainer>
        <TableColumn ref={dropWaiting}>
          <ColumnTitle>Esperando Aceitação</ColumnTitle>
          {boardWaiting.map((item: IOrder) => {
            return <Card 
            data={item.data_pedido} 
            nome={item.nome_pedido} 
            observacao={item.obs_pedido}
            preco={item.valor_pedido}
            qtd={item.qtd_pedido}
            key={item.id}
            id={item.id}
            />
          })}
        </TableColumn>
        <TableColumn ref={dropPreparing}>
          <ColumnTitle>Em Preparo</ColumnTitle>
          {boardPreparing.map((item: IOrder) => {
            return <Card 
            data={item.data_pedido} 
            nome={item.nome_pedido} 
            observacao={item.obs_pedido}
            preco={item.valor_pedido}
            qtd={item.qtd_pedido}
            key={item.id}
            id={item.id}

            />
          })}
        </TableColumn>
        <TableColumn ref={dropOnTheWay}>
          <ColumnTitle>Em Rota</ColumnTitle>
          {boardOnTheWay.map((item: IOrder) => {
            return <Card 
            data={item.data_pedido} 
            nome={item.nome_pedido} 
            observacao={item.obs_pedido}
            preco={item.valor_pedido}
            qtd={item.qtd_pedido}
            key={item.id}
            id={item.id}

            />
          })}
        </TableColumn>
        <TableColumn ref={dropDelivered}>
          <ColumnTitle>Entregue</ColumnTitle>
          {boardDelivered.map((item: IOrder) => {
            return <Card 
            data={item.data_pedido} 
            nome={item.nome_pedido} 
            observacao={item.obs_pedido}
            preco={item.valor_pedido}
            qtd={item.qtd_pedido}
            key={item.id}
            id={item.id}

            />
          })}
        </TableColumn>
      </TableContainer>
    </MainContainer>
  );
};

export default Orders;