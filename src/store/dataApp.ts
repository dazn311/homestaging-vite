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
  title: string;
  price: number;
  imageUrl: string;
}

export const ImageBlockData:TImageBlockData[] = [
  {
    id:1,
    title:'ЖК Ильинские Луга',
    price:132000,
    imageUrl:'https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_19_55.jpg'
  },
  {
    id:2,
    title:'ЖК Ильинские Луга',
    price:1320000,
    imageUrl:'https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_20_14.jpg'
  },
  {
    id:3,
    title:'ЖК Ильинские Луга',
    price:1320000,
    imageUrl:'https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_20_31.jpg'
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