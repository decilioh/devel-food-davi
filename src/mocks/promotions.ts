interface IPromotion {
    nomePromocao: string;
    prato: string;
    desconto: number; // desconto em porcentagem
    inicioPromocao: string; // formato YYYY-MM-DD
    fimPromocao: string; // formato YYYY-MM-DD
    imagemUrl: string;
  }
  
export const mockPromotions: Array<IPromotion> = [
    {
      nomePromocao: "Promoção de Inverno",
      prato: "Batata Frita",
      desconto: 20,
      inicioPromocao: "2024-09-01",
      fimPromocao: "2024-09-10",
      imagemUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    },
    {
      nomePromocao: "Semana do Hambúrguer",
      prato: "Hambúrguer",
      desconto: 15,
      inicioPromocao: "2024-09-05",
      fimPromocao: "2024-09-15",
      imagemUrl: "https://images.unsplash.com/photo-1550317138-10000687a72b",
    },
    {
      nomePromocao: "Festival da Pizza",
      prato: "Pizza de Calabresa",
      desconto: 25,
      inicioPromocao: "2024-09-08",
      fimPromocao: "2024-09-18",
      imagemUrl: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f",
    },
    {
      nomePromocao: "Sexta do Sushi",
      prato: "Sushi",
      desconto: 30,
      inicioPromocao: "2024-09-10",
      fimPromocao: "2024-09-12",
      imagemUrl: "https://images.unsplash.com/photo-1562967916-eb82221dfb8f",
    },
    {
      nomePromocao: "Promoção Saudável",
      prato: "Salada Caesar",
      desconto: 18,
      inicioPromocao: "2024-09-15",
      fimPromocao: "2024-09-20",
      imagemUrl: "https://images.unsplash.com/photo-1612197592410-1cbaf0f18f3d",
    },
    {
      nomePromocao: "Especial de Lasagna",
      prato: "Lasagna",
      desconto: 22,
      inicioPromocao: "2024-09-18",
      fimPromocao: "2024-09-25",
      imagemUrl: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    },
    {
      nomePromocao: "Festival do Taco",
      prato: "Tacos",
      desconto: 20,
      inicioPromocao: "2024-09-20",
      fimPromocao: "2024-09-30",
      imagemUrl: "https://images.unsplash.com/photo-1601924582975-4cc929eeca16",
    },
    {
      nomePromocao: "Frango Crocante",
      prato: "Frango Assado",
      desconto: 17,
      inicioPromocao: "2024-09-22",
      fimPromocao: "2024-09-28",
      imagemUrl: "https://images.unsplash.com/photo-1588345921523-4b36cebee040",
    },
    {
      nomePromocao: "Spaghetti Week",
      prato: "Spaghetti à Bolonhesa",
      desconto: 30,
      inicioPromocao: "2024-09-24",
      fimPromocao: "2024-09-30",
      imagemUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      nomePromocao: "Promoção de Pão de Alho",
      prato: "Pão de Alho",
      desconto: 10,
      inicioPromocao: "2024-09-01",
      fimPromocao: "2024-09-07",
      imagemUrl: "https://images.unsplash.com/photo-1543332164-77676d36643c",
    },
    {
      nomePromocao: "Dia do Burrito",
      prato: "Burrito",
      desconto: 35,
      inicioPromocao: "2024-09-02",
      fimPromocao: "2024-09-08",
      imagemUrl: "https://images.unsplash.com/photo-1600508778415-a6d590d70073",
    },
    {
      nomePromocao: "Camarão na Brasa",
      prato: "Camarão Grelhado",
      desconto: 25,
      inicioPromocao: "2024-09-05",
      fimPromocao: "2024-09-12",
      imagemUrl: "https://images.unsplash.com/photo-1562967916-eb82221dfb8f",
    },
    {
      nomePromocao: "Bife com Desconto",
      prato: "Bife com Fritas",
      desconto: 15,
      inicioPromocao: "2024-09-10",
      fimPromocao: "2024-09-18",
      imagemUrl: "https://images.unsplash.com/photo-1592839718757-cd8d4c8949d9",
    },
    {
      nomePromocao: "Sopa Quentinha",
      prato: "Sopa de Legumes",
      desconto: 10,
      inicioPromocao: "2024-09-15",
      fimPromocao: "2024-09-25",
      imagemUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      nomePromocao: "Panqueca Maníaca",
      prato: "Panqueca",
      desconto: 50,
      inicioPromocao: "2024-09-17",
      fimPromocao: "2024-09-22",
      imagemUrl: "https://images.unsplash.com/photo-1588559566375-d2d4f52a1f79",
    },
    {
      nomePromocao: "Risoto Especial",
      prato: "Risoto",
      desconto: 28,
      inicioPromocao: "2024-09-20",
      fimPromocao: "2024-09-30",
      imagemUrl: "https://images.unsplash.com/photo-1514516879285-5ac234b88821",
    }
  ];
  