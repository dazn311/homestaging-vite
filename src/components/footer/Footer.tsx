import {ButtonTelegram} from "../btn-telegram/ButtonTelegram.tsx";
import {Link, useNavigate} from "react-router";
import {navmenuFooterArr, navmenuFooterCol2Arr} from "../navHeader/dataNav.ts";
import {handlerClickLink} from "../../utils/handlerClickLink.ts";

const date = new Date();
const fullYear = date.getFullYear();

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer id="footer" className="footer position-relative dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about">
                <a
                  href="/"
                  onClick={(e)=>handlerClickLink(e,'/',navigate)}
                  className="logo sitename">Москва</a>
                <div className="footer-contact pt-3">
                  <p>125222, Митино.</p>
                  <p>Красногорск.</p>
                  <p className="mt-3"><strong>тел.:</strong> <a href="tel:+79256388830">+7 (925) 63-888-30</a></p>
                  <p><strong>эл.почта:</strong> <span>natalia888@homesstaging.online</span></p>
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
                {navmenuFooterArr.map(item => (
                  <li key={item.url}>
                    <a
                      onClick={(e)=>handlerClickLink(e,item.url,navigate)}
                      href={item.url}>{item.title}</a>
                  </li>
                ))}
                <li><Link to={"/videos"} >Материалы</Link></li>
                <li><Link to={"/logout"} >Выйти</Link></li>
                <li><Link to={"/login"}>Логин</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Наши услуги</h4>
              <ul>
                {navmenuFooterCol2Arr.map(item => (
                  <li key={item.url}>
                    <a onClick={(e)=>handlerClickLink(e,item.url,navigate)}
                       href={item.url}>{item.title}</a>
                  </li>
                ))}
                <li><Link to={"/projects?jkName=all"}>Проекты</Link></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Наша рассылка</h4>
              <p>Подпишитесь на нашу рассылку и получайте последние новости о наших услугах и новых проектах!</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" name="email"/>
                  <input type="submit" value="Подписаться"/>
                </div>
                <div className="loading">Загрузка</div>
                <div className="error-message"></div>
                <div className="sent-message">Ваш запрос на подписку отправлен. Спасибо!</div>
              </form>
            </div>

          </div>
        </div>

        <CopyrightContainer />
      </footer>

    </>
  )
}


function CopyrightContainer() {
  return (
    <div className="container copyright text-center mt-4">
      <p>© <span>2025-{fullYear}. Copyright</span> <strong className="px-1 sitename">Dazn311</strong>
        <span>All Rights Reserved</span>, version of 06.02.2026</p>
      <div className="credits">
        Designed by <a href="#">BootstrapMade</a>
      </div>
    </div>
  )
}