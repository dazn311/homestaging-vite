import type {TNavmenu, TNavMenuSub} from "./typesNav.ts";

export const navmenuArr:TNavmenu[] = [
  {url: '#titte-app', title: 'Главная'},
  {url: '#about', title: 'Обо мне'},
  {url: '#service', title: 'Услуги'},
  {url: '#pricing', title: 'Цены'},
  {url: '#portfolio-anchor', title: 'Портфолио'},
];

export const navmenuFooterArr:TNavmenu[] = [
  {url: '#titte-app', title: 'Главная'},
  {url: '#about', title: 'Обо мне'},
  {url: '#portfolio-anchor', title: 'Портфолио'},
  {url: '#contact', title: 'Контакты'},
];

export const navmenuFooterCol2Arr:TNavmenu[] = [
  {url: '#service', title: 'Услуги'},
  {url: '#pricing', title: 'Цены'},
];

export const navmenuSubArr:TNavMenuSub[] = [
  {
    title: 'ЖК Ильинские Луга',
    jkName: "ilyinskieLuga",
    projectId:'ilyinskie20',
    children: [
      {url: '/document?id=ilyinskie20', title: 'ул. Заповедная, 20', docId: "ilyinskie20",},
      {url: '/document?id=ilyinskie21', title: 'ул. Заповедная, 21', docId: "ilyinskie21",},
    ]},
  {
    title: 'ЖК Римского-Корсакова',
    jkName: "rimskogoKorsakova",
    projectId:'ilyinskie20',
    children: [
      {url: '/document?id=rimskogoKorsakova9152', title: 'ул. Римского-Корсакова, 11к9',docId:'rimskogoKorsakova9152'},
    ]},
  {
    title: 'ЖК Митинский лес',
    jkName: "mitinskiiles",
    projectId:'mitino1',
    children: [
      {url: '/document?id=mitino1', title: 'ул. Муравская, 38Бк1',docId: 'mitino1'},
      {url: '/document?id=mitino2', title: 'ул. Муравская, 32к1',docId: 'mitino2'},
    ]},
  {
    title: 'ЖК Кронштадтский',
    jkName: "kronstadskii",
    projectId:'kronstadskii',
    children: [
      {url: '/document?id=kronstadskii', title: 'Кронштадтский бул., 8к2',docId: "kronstadskii"},
    ]},
  {
    title: 'ЖК Holland park',
    jkName: "hollandpark",
    projectId:'hollandpark',
    children: [
      {url: '/document?id=ozerova8k1kv176', title: 'ул. Озерова, 8к1',docId: "ozerova8k1kv176"},
    ]},
];
