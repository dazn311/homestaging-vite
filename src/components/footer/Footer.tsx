import {ButtonTelegram} from "../btn-telegram/ButtonTelegram.tsx";

export const Footer = () => {

  return (
    <>
      <footer id="footer" className="footer position-relative dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about">
                <a href="/" className="logo sitename">Москва</a>
                <div className="footer-contact pt-3">
                  <p>125222, Митино.</p>
                  <p>Красногорск.</p>
                  <p className="mt-3"><strong>Phone:</strong> <a href="tel:+79256388830">+7 (925) 63-888-30</a></p>
                  <p><strong>Email:</strong> <span>natalia888@homesstaging.online</span></p>
                </div>
                <div className="social-links d-flex mt-4">
                  <ButtonTelegram cls={'telegram'} />
                  <ButtonTelegram cls={'facebook'} />
                  <ButtonTelegram cls={'instagram'} />
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Полезные ссылки</h4>
              <ul>
                <li><a href="/#hero" className="active">Главная</a></li>
                <li><a href="/#about">Обо мне</a></li>
                <li><a href="/#portfolio">Портфолио</a></li>
                <li><a href="/#contact">Контакты</a></li>

                <li><a href="/?logout=user">Выйти</a></li>

                <li><a href="/?login=user">Логин</a></li>

              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Наши услуги</h4>
              <ul>
                <li><a href="/#service">Услуги</a></li>
                <li><a href="/#pricing">Цены</a></li>
                <li><a href="/?documents=all">Проекты</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Наша рассылка</h4>
              <p>Подпишитесь на нашу рассылку и получайте последние новости о наших услугах и новых проектах!</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" name="email"/>
                  <input type="submit" value="Subscribe"/>
                </div>
                <div className="loading">Загрузка</div>
                <div className="error-message"></div>
                <div className="sent-message">Ваш запрос на подписку отправлен. Спасибо!</div>
              </form>
            </div>

          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>2025. Copyright</span> <strong className="px-1 sitename">Dazn311</strong>
            <span>All Rights Reserved</span></p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i
        className="bi bi-arrow-up-short"></i></a>
      <div id="preloader3"></div>
    </>
  )
}