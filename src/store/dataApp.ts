export type TProject = {
  id: string;
  jkName: string;
  jkTitle: string;
  street: string;
  city?: string;
  url: string;
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
}
//

export const ImageBlockData:TImageBlockData[] = [
  {
    id:1,
    docId:'ilyinskie21',
    title:'ЖК Ильинские Луга,21',
    price:132000,
    imageUrl:'https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_19_55.jpg'
  },
  {
    id:2,
    docId:'ilyinskie21',
    title:'ЖК Ильинские Луга,21',
    price:1320000,
    imageUrl:'https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_20_14.jpg'
  },
  {
    id:3,
    docId:'ilyinskie21',
    title:'ЖК Ильинские Луга,21',
    price:1320000,
    imageUrl:'https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_20_31.jpg'
  },
  {
    id:4,
    docId:'ilyinskie20',
    title:'ЖК Ильинские Луга,20',
    price:1325000,
    imageUrl:'https://homesstaging.online/uploads/ilyinskie20/20/20250906_03_57_46.jpg'
  },
  {
    id:5,
    docId:'ilyinskie20',
    title:'ЖК Ильинские Луга,20',
    price:1325000,
    imageUrl:'https://homesstaging.online/uploads/ilyinskie20/20/20250906_03_58_38.jpg'
  },
  {
    id:6,
    docId:'ilyinskie20',
    title:'ЖК Ильинские Луга,20',
    price:1325000,
    imageUrl:'https://homesstaging.online/uploads/ilyinskie20/20/20250906_03_58_16.jpg'
  },
  {
    id:7,
    docId:'rimskogoKorsakova9152',
    title:'ЖК Римского Корсакова,9к1',
    price:1350000,
    imageUrl:'https://homesstaging.online/uploads/rimskogoKorsakova9152/11%D0%BA9/20250920_15_16_10.jpg'
  },
  {
    id:8,
    docId:'rimskogoKorsakova9152',
    title:'ЖК Римского Корсакова,9к1',
    price:1350000,
    imageUrl:'https://homesstaging.online/uploads/rimskogoKorsakova9152/11%D0%BA9/20250921_13_13_47.jpeg'
  },
  {
    id:9,
    docId:'rimskogoKorsakova9152',
    title:'ЖК Римского Корсакова,9к1',
    price:1350000,
    imageUrl:'https://homesstaging.online/uploads/rimskogoKorsakova9152/11%D0%BA9/20250921_13_11_43.jpeg'
  },
  {
    id:10,
    docId:'jkHollandPark8k1',
    title:'ЖК Холланд Парк,8к1',
    price:1430000,
    imageUrl:'https://homesstaging.online/uploads/jkHollandPark8k1/754/JK-Holland-park-103.jpg'
  },
  {
    id:11,
    docId:'jkHollandPark8k1',
    title:'ЖК Холланд Парк,8к1',
    price:1430000,
    imageUrl:'https://homesstaging.online/uploads/jkHollandPark8k1/754/JK-Holland-park-104.jpg'
  },
  {
    id:12,
    docId:'jkHollandPark8k1',
    title:'ЖК Холланд Парк,8к1',
    price:1430000,
    imageUrl:'https://homesstaging.online/uploads/hollandparkozerova8k1/8%D0%BA1/20251204_06_00_04.jpg'
  },
  {
    id:130000777,
    docId:'mitino2',
    title:'ЖК Митинский лес,2',
    price:1430000,
    imageUrl:'https://homesstaging.online/uploads/mitino2/32%D0%BA1/20250906_04_34_10.jpg'
  },
  {
    id:13,
    docId:'mitino2',
    title:'ЖК Митинский лес,2',
    price:1430000,
    imageUrl:'https://homesstaging.online/uploads/mitino2/32%D0%BA1/20250906_04_34_45.jpg'
  },
  {
    id:14,
    docId:'mitino2',
    title:'ЖК Митинский лес,2',
    price:1430000,
    imageUrl:'https://homesstaging.online/uploads/mitino2/32%D0%BA1/20250906_04_34_25.jpg'
  },
  {
    id:1500007,
    docId:'mitino1',
    title:'ЖК Митинский лес,38',
    price:1430000,
    imageUrl:'https://homesstaging.online/assets/img/flats/Mitinskii-les/38/4.jpg'
  },
  {
    id:15,
    docId:'mitino1',
    title:'ЖК Митинский лес,38',
    price:1430000,
    imageUrl:'https://homesstaging.online/uploads/mitino1/38%D0%91%D0%BA1/20250906_04_32_51.jpg'
  },
  {
    id:16,
    docId:'mitino1',
    title:'ЖК Митинский лес,38',
    price:1430000,
    imageUrl:'https://homesstaging.online/uploads/mitino1/38%D0%91%D0%BA1/20250906_04_32_36.jpg'
  },
  {
    id:17,
    docId:'kronstadskii1',
    title:'ЖК Кронштадский,8к2',
    price:1430000,
    imageUrl:'https://homesstaging.online/uploads/kronstadskii1/8%D0%BA2/20250906_04_46_16.png'
  },
  {
    id:18,
    docId:'kronstadskii1',
    title:'ЖК Кронштадский,8к2',
    price:1430000,
    imageUrl:'https://homesstaging.online/uploads/kronstadskii1/8%D0%BA2/20250906_04_46_51.png'
  },
  {
    id:19,
    docId:'kronstadskii1',
    title:'ЖК Кронштадский,8к2',
    price:1430000,
    imageUrl:'https://homesstaging.online/uploads/kronstadskii1/8%D0%BA2/20250906_04_46_37.png'
  },
]

export type PricingItemProps = {
  caption: string;
  body: string;
}


export const aboutItems: PricingItemProps[] = [
  {
    caption:'✨Вы экономите свой бюджет.',
    body:'Кажется, совсем не очевидно, но ребят, практика показывает и цифры говорят сами за себя, самостоятельно делая ремонт, зачастую, клиенты легко выходят за рамки бюджета, в силу неопытности и нехватки времени в оценке рынка товаров и услуг, тем более ценники переписываются практически еженедельно'
  },
  {
    caption:'✨Вы экономите свое время.',
    body:'Разработка концепции, подбор мебели и замеры, нужные ребята-сантехники, оконщики, установщики дверей и кондеев, сборщики мебели, электрики, маляры, уборщики, фотографы и пр., а доставки в новостройки отдельная головная боль…особенно когда не работают лифты или все получают ключи одновременно, и машины стоят в очередь, чтобы разгрузиться у подъезда.'
  },
  {
    caption:'✨Вы получаете продуманную эргономику и современные стилевые решения.',
    body:'Даже при таких широких возможностях для выбора товаров и богатом ассортименте мебели, аксессуаров и гаджетов для дома, у многих клиентов в итоге получается если не бабушкин евроремонт, то полный асинхрон в цветовом и стилевом концепте, розеток не хватает, материалы лишние, шторы короткие и пр.'
  },
  {
    caption:'✨Ваша квартира выделяется среди конкурентов/стоимость аренды или продажи существенно повышается.',
    body:'На практике, квартиры даже с минимальным хоумстейджингом, сдаются/продаются быстрее, спрос на них выше, тк любому приятнее жить в квартире, как с картинки в Pinterest.'
  },
  {
    caption:'Друзья - это вещи очевидные,',
    body:' но почему-то для многих, до сих пор невероятные☺️'
  },
]