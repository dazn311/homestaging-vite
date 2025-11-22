export const Header = () => {

  return (

    <header id="header" className="header ">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:natalia888@homesstaging.online">natalia888@homesstaging.online</a></i>
            <i className="bi bi-phone d-flex align-items-center ms-4"><span><a href="tel:+7(925) 63-888-30">+7(925) 63-888-30</a></span></i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="https://t.me/homeupakovka"><i className="bi bi-telegram"></i></a>
            <a href="https://t.me/homeupakovka"><i className="bi bi-facebook"></i></a>
            <a href="https://t.me/homeupakovka"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1 className="sitename">Homestaging МОСКВА</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="/#hero" className="active">Главная</a></li>
              <li><a href="/#about">Обо мне</a></li>
              <li><a href="/#cards">Услуги</a></li>
              <li><a href="/#pricing">Цены</a></li>
              <li><a href="/#portfolio">Портфолио</a></li>
              <li className="dropdown text-secondary">
                <a>
                  <span className="text-secondary">Проекты</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  {}
                  <li className="dropdown">
                    <a>
                      <span>key</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      {/*menu as $menuObj*/}
                      <li><a href="/?details=<?=$menuObj['project_key']; ?>"></a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  )
}