export type StatusPedido = 'AGUARDANDO_CONFIRMACAO' | 'EM_PREPARO' | 'SAIU_PARA_ENTREGA' | 'ENTREGUE';

type Addresses = {
    addressLabel: string
    city: string
    id: number
    neighborhood: string
    number: string
    postalCode: string
    state: string
    street: string
}

type Customer = {
    cpf: string
    email: string
    entityType: string
    id: number
    lastname: string
    name: string
    password: string
    phoneNumber: string
    photo: string
    addresses: Array<Addresses>
}


type Products = {
    dishId: number
    dishName: string
    quantity: number
}

export interface IOrder {
    customer: Customer
    orderId: number
    status: StatusPedido
    totalPrice: number
    products: Products[]
}

export const mockOrders: Array<IOrder> = [
      // {
      //   id: 1,
      //   data_pedido: '24/09/2024',
      //   valor_pedido: "54.90",
      //   nome_pedido: 'Bife à milanesa',
      //   obs_pedido: 'Sem cebola',
      //   qtd_pedido: 3,
      //   status_pedido: 'AGUARDANDO_CONFIRMACAO',
      // },
      // {
      //   id: 2,
      //   data_pedido: '24/09/2024',
      //   valor_pedido: "35.50",
      //   nome_pedido: 'Frango grelhado',
      //   obs_pedido: 'Sem tempero forte',
      //   qtd_pedido: 1,
      //   status_pedido: 'EM_PREPARO',
      // },
      // {
      //   id: 3,
      //   data_pedido: '24/09/2024',
      //   valor_pedido: "42.30",
      //   nome_pedido: 'Alaminuta acebolada',
      //   obs_pedido: 'Com bastante cebola',
      //   qtd_pedido: 2,
      //   status_pedido: 'SAIU_PARA_ENTREGA',
      // },
      // {
      //   id: 4,
      //   data_pedido: '24/09/2024',
      //   valor_pedido: "60.00",
      //   nome_pedido: 'Salmão grelhado',
      //   obs_pedido: 'Sem molho',
      //   qtd_pedido: 1,
      //   status_pedido: 'ENTREGUE',
      // },
      // {
      //   id: 5,
      //   data_pedido: '24/09/2024',
      //   valor_pedido: "28.75",
      //   nome_pedido: 'Lasanha à bolonhesa',
      //   obs_pedido: 'Extra queijo',
      //   qtd_pedido: 2,
      //   status_pedido: 'AGUARDANDO_CONFIRMACAO',
      // },
      // {
      //   id: 6,
      //   data_pedido: '24/09/2024',
      //   valor_pedido: "48.90",
      //   nome_pedido: 'Filé de frango à parmegiana',
      //   obs_pedido: 'Sem batata frita',
      //   qtd_pedido: 3,
      //   status_pedido: 'EM_PREPARO',
      // },
];
