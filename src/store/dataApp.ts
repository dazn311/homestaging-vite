/**
 * dataApp
 * */
import {baseUrl} from "@/api/data/data-project.ts";

export type TProject = {
  id: string;
  document_id?: string;
  jkName: string;
  jkTitle: string;
  street: string;
  city?: string;
  dataDoc?: [string,string,string,string,string];
  dataWork?: string[];
  url: string;
  images: string[];
};

type TItemPrice = {
  id: number;
  body: string;
}

export type TTitlePrice = {
  id: number;
  title: string;
  price: number;
}

export type TPricingItemProps = {
  caption: string;
  titles: TTitlePrice[];
  items: TItemPrice[];
}

export const pricingItemProps:TPricingItemProps = {
  caption: 'Хоумстейджинг',
  titles:[
    {id:1,title:'Студия',price:150},
    {id:2,title:'1-комнатная',price:180},
    {id:3,title:'2/3-комнатная',price:200},
  ],
  items:[
    {id: 1, body:'замер, анализ ЦА, выбор планировочного решения всей квартиры'},
    {id: 2, body:'смета и последующий подбор всей мебели, техники и декора'},
    {id: 3, body:'визуализация в виде коллажей (2d)'},
    {id: 4, body:'закупка и прием всех материалов на объект'},
    {id: 5, body:'сборка мебели и техники, покраска стен и пр.'},
    {id: 6, body:'клининг и стейджинг, фотосъемка объекта'},
  ]
}

export const pricingOnLine:TPricingItemProps = {
  caption: 'Онлайн консультация',
  titles:[
    {id:1,title:'Студия',price:10},
    {id:2,title:'1-комнатная',price:20},
    {id:3,title:'2/3-комнатная',price:30},
  ],
  items:[
    {id: 2, body:'подбор всей мебели, техники и декора'},
    {id: 3, body:'визуализация в виде коллажей (2d)'},
  ]
}

export const pricingHelpers:TPricingItemProps = {
  caption: 'Помощь в подготовке',
  titles:[
    {id:1,title:'Студия',price:30},
    {id:2,title:'1-комнатная',price:40},
    {id:3,title:'2/3-комнатная',price:50},
  ],
  items:[
    {id: 1, body:'замер, анализ ЦА, выбор планировочного решения всей квартиры'},
    {id: 2, body:'смета и подбор всей мебели, техники и декора'},
    {id: 3, body:'визуализация в виде коллажей (2d)'},
  ]
}


export type TImageBlockData = {
  id: number;
  docId: string;
  title: string;
  price: number;
  imageUrl: string;
  cls?: string;
}

export const ImageBlockData:TImageBlockData[] = [
  {
    id:100044,
    docId:'8',
    title:'ЖК Кронштадтский,8к2п2',
    price:132000,
    imageUrl: `${baseUrl}/uploads/kronstadskii8k2p2/8%D0%BA2p2/20260208_05_49_03.jpg`
  },
  {
    id:1000443,
    docId:'8',
    title:'ЖК Кронштадтский,8к2п2',
    price:132000,
    imageUrl: `${baseUrl}/uploads/kronstadskii8k2p2/8%D0%BA2p2/20260208_05_49_37.jpg`
  },
  {
    id:1000444,
    docId:'8',
    title:'ЖК Кронштадтский,8к2п2',
    price:132000,
    imageUrl: `${baseUrl}/uploads/kronstadskii8k2p2/8%D0%BA2p2/20260208_05_50_05.jpg`
  },
  {
    id:1,
    docId:"4",
    title:'ЖК Ильинские Луга,21',
    price:132000,
    imageUrl:`${baseUrl}/uploads/ilyinskie21/21/20250906_04_19_55.jpg`
  },
  {
    id:2,
    docId:"4",
    title:'ЖК Ильинские Луга,21',
    price:1320000,
    imageUrl:`${baseUrl}/uploads/ilyinskie21/21/20250906_04_20_14.jpg`
  },
  {
    id:3,
    docId:"4",
    title:'ЖК Ильинские Луга,21',
    price:1320000,
    imageUrl:`${baseUrl}/uploads/ilyinskie21/21/20250906_04_20_31.jpg`
  },
  {
    id:4,
    docId:"5",
    title:'ЖК Ильинские Луга,20',
    price:1325000,
    imageUrl:`${baseUrl}/uploads/ilyinskie20/20/20250906_03_57_46.jpg`
  },
  {
    id:5,
    docId:"5",
    title:'ЖК Ильинские Луга,20',
    price:1325000,
    imageUrl:`${baseUrl}/uploads/ilyinskie20/20/20250906_03_58_38.jpg`
  },
  {
    id:6,
    docId:"5",
    title:'ЖК Ильинские Луга,20',
    price:1325000,
    imageUrl:`${baseUrl}/uploads/ilyinskie20/20/20250906_03_58_16.jpg`
  },
  {
    id:7,
    docId:"6",
    title:'ЖК Римского Корсакова,9к1',
    price:1350000,
    imageUrl:`${baseUrl}/uploads/rimskogoKorsakova9152/11%D0%BA9/20250920_15_16_10.jpg`
  },
  {
    id:8,
    docId:"6",
    title:'ЖК Римского Корсакова,9к1',
    price:1350000,
    imageUrl:`${baseUrl}/uploads/rimskogoKorsakova9152/11%D0%BA9/20250921_13_13_47.jpeg`
  },
  {
    id:9,
    docId:"6",
    title:'ЖК Римского Корсакова,9к1',
    price:1350000,
    imageUrl:`${baseUrl}/uploads/rimskogoKorsakova9152/11%D0%BA9/20250921_13_11_43.jpeg`
  },
  {
    id:10,
    docId:"7",
    title:'ЖК Холланд Парк,8к1',
    price:1430000,
    imageUrl:`${baseUrl}/uploads/jkHollandPark8k1/754/JK-Holland-park-103.jpg`
  },
  {
    id:11,
    docId:"7",
    title:'ЖК Холланд Парк,8к1',
    price:1430000,
    imageUrl:`${baseUrl}/uploads/jkHollandPark8k1/754/JK-Holland-park-104.jpg`
  },
  {
    id:12,
    docId:"7",
    title:'ЖК Холланд Парк,8к1',
    price:1430000,
    imageUrl:`${baseUrl}/uploads/hollandparkozerova8k1/8%D0%BA1/20251204_06_00_04.jpg`
  },
  {
    id:130000777,
    docId:"3",
    title:'ЖК Митинский лес,2',
    price:1430000,
    imageUrl:`${baseUrl}/uploads/mitino2/32%D0%BA1/20250906_04_34_10.jpg`
  },
  {
    id:13,
    docId:"3",
    title:'ЖК Митинский лес,2',
    price:1430000,
    imageUrl:`${baseUrl}/uploads/mitino2/32%D0%BA1/20250906_04_34_45.jpg`
  },
  {
    id:14,
    docId:"3",
    title:'ЖК Митинский лес,2',
    price:1430000,
    imageUrl:`${baseUrl}/uploads/mitino2/32%D0%BA1/20250906_04_34_25.jpg`
  },
  {
    id:1500007,
    docId:"2",
    title:'ЖК Митинский лес,38',
    price:1430000,
    imageUrl:`${baseUrl}/assets/img/flats/Mitinskii-les/38/4.jpg`
  },
  {
    id:15,
    docId:"2",
    title:'ЖК Митинский лес,38',
    price:1430000,
    imageUrl:`${baseUrl}/uploads/mitino1/38%D0%91%D0%BA1/20250906_04_32_51.jpg`
  },
  {
    id:16,
    docId:"2",
    title:'ЖК Митинский лес,38',
    price:1430000,
    imageUrl:`${baseUrl}/uploads/mitino1/38%D0%91%D0%BA1/20250906_04_32_36.jpg`
  },
  {
    id:17,
    docId:"1",
    title:'ЖК Кронштадский,8к2',
    price:1430000,
    imageUrl:`${baseUrl}/uploads/kronstadskii1/8%D0%BA2/20250906_04_46_16.png`
  },
  {
    id:18,
    docId:"1",
    title:'ЖК Кронштадский,8к2',
    price:1430000,
    imageUrl:`${baseUrl}/uploads/kronstadskii1/8%D0%BA2/20250906_04_46_51.png`
  },
  {
    id:19,
    docId:"1",
    title:'ЖК Кронштадский,8к2',
    price:1430000,
    imageUrl:`${baseUrl}/uploads/kronstadskii1/8%D0%BA2/20250906_04_46_37.png`
  },
]

export type TAboutItemProps = {
  caption: string;
  body: string;
}


export const aboutItems: TAboutItemProps[] = [
  {
    caption:'✨Контроль инвестиций:',
    body:'Мы исключаем необязательные и дорогостоящие ошибки, слепое следование трендам или угадывание. Я провожу честную оценку бюджета и контролирую каждую его копейку, обеспечивая попадание в согласованные рамки.'
  },
  {
    caption:'✨Скорость оборота:',
    body:'Превращение черного квадрата в магнит для арендаторов/покупателей происходит быстрее, когда квартира выглядит полностью готовой и продуманной. Я гарантирую эстетический стандарт, вышедший за рамки среднерыночного предложения.'
  },
  {
    caption:'✨Идеальный сценарий: ',
    body:'От разработки концепции и подбора материалов до логистики, монтажа и финальной фотосъемки — я беру на себя всю головную боль строительства. Вы получаете готовое решение, которое работает на ваш капитал.'
  },
  {
    caption:'✨Моя цель',
    body:'максимизировать стоимость вашего объекта в кратчайшие сроки.'
  },
  {
    caption:'Друзья - это вещи очевидные,',
    body:' но почему-то для многих, до сих пор невероятные☺️'
  },
]