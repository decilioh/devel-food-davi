export type StatusPedido = 'AGUARDANDO_CONFIRMACAO' | 'EM_PREPARO' | 'SAIU_PARA_ENTREGA' | 'ENTREGUE';

export interface IOrder {
    id: number;
    data_pedido: string;
    valor_pedido: string;
    nome_pedido: string;
    obs_pedido: string;
    qtd_pedido: number;
    status_pedido: StatusPedido;
}

export const mockOrders: Array<IOrder> = [
    {
        id: 1,
        data_pedido: '24/09/2024',
        valor_pedido: "54.90",
        nome_pedido: 'Bife à milanesa',
        obs_pedido: 'Sem cebola',
        qtd_pedido: 3,
        status_pedido: 'AGUARDANDO_CONFIRMACAO',
      },
      {
        id: 2,
        data_pedido: '24/09/2024',
        valor_pedido: "35.50",
        nome_pedido: 'Frango grelhado',
        obs_pedido: 'Sem tempero forte',
        qtd_pedido: 1,
        status_pedido: 'EM_PREPARO',
      },
      {
        id: 3,
        data_pedido: '24/09/2024',
        valor_pedido: "42.30",
        nome_pedido: 'Alaminuta acebolada',
        obs_pedido: 'Com bastante cebola',
        qtd_pedido: 2,
        status_pedido: 'SAIU_PARA_ENTREGA',
      },
      {
        id: 4,
        data_pedido: '24/09/2024',
        valor_pedido: "60.00",
        nome_pedido: 'Salmão grelhado',
        obs_pedido: 'Sem molho',
        qtd_pedido: 1,
        status_pedido: 'ENTREGUE',
      },
      {
        id: 5,
        data_pedido: '24/09/2024',
        valor_pedido: "28.75",
        nome_pedido: 'Lasanha à bolonhesa',
        obs_pedido: 'Extra queijo',
        qtd_pedido: 2,
        status_pedido: 'AGUARDANDO_CONFIRMACAO',
      },
      {
        id: 6,
        data_pedido: '24/09/2024',
        valor_pedido: "48.90",
        nome_pedido: 'Filé de frango à parmegiana',
        obs_pedido: 'Sem batata frita',
        qtd_pedido: 3,
        status_pedido: 'EM_PREPARO',
      },
];
