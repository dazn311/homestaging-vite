import './nav.scss';

export const NavHeader = () => {
  return (
    <div className="branding d-flex align-items-center">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <h1 className="sitename">HomeStaging МОСКВА</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            {navmenuArr.map(item => (
              <li><a href={item.url}>{item.title}</a></li>
            ))}
            <li className="dropdown text-secondary">
              <a>
                <span className="text-secondary">Проекты</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={'jk-name'}>
                {navmenuSubArr.map(item => (
                  <ListItem title={item.title} children={item.children}/>
                ))}
              </ul>
            </li>
            <li><a href="/#contact">Контакты</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </div>
  )
}

type TNavmenu = {
  url: string;
  title: string;
};

type TNavMenuSub = {
  title: string;
  children: TNavmenu[];
};

const navmenuArr:TNavmenu[] = [
  {url: '/#hero', title: 'Главная'},
  {url: '/#about', title: 'Обо мне'},
  {url: '/#service', title: 'Услуги'},
  {url: '/#pricing', title: 'Цены'},
  {url: '/#portfolio', title: 'Портфолио'},
];

const navmenuSubArr:TNavMenuSub[] = [
  {title: 'ЖК Ильинские Луга',children: [
      {url: '/document?id=ilyinskie20', title: 'ул. Заповедная, 20'},
      {url: '/document?id=ilyinskie21', title: 'ул. Заповедная, 21'},
    ]},
  {title: 'ЖК Римского-Корсакова',children: [
      {url: '/document?id=rimskogoKorsakova9152', title: 'ул. Римского-Корсакова, 11к9'},
    ]},
  {title: 'ЖК Митинский лес',children: [
      {url: '/document?id=mitino1', title: 'ул. Муравская, 38Бк1'},
      {url: '/document?id=mitino2', title: 'ул. Муравская, 32к1'},
    ]},
  {title: 'ЖК Кронштадтский',children: [
      {url: '/document?id=kronstadskii', title: 'Кронштадтский бул., 8к2'},
    ]},
  {title: 'ЖК Holland park',children: [
      {url: '/document?id=ozerova8k1kv176', title: 'ул. Озерова, 8к1'},
    ]},
];

function ListItem({title,children}:{title:string,children:TNavmenu[]}) {
  return (
    <li className="dropdown">
      <a>
        <span>{title}</span>
        <i className="bi bi-chevron-down toggle-dropdown"></i>
      </a>
      <ul className={'street-name'}>
        {children.map((item:TNavmenu) => (
          <li><a href={item.url}>{item.title}</a></li>
        ))}
      </ul>
    </li>
  )
}