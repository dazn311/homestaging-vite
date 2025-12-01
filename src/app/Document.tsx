import './App.css'
import {useSearchParams} from "react-router";
import {dataApp} from "../store/dataApp.ts";
import {Breadcrumbs} from "../components/breadcrumbs/Breadcrumbs.tsx";

function Document() {
  const [searchParams] = useSearchParams();

  const street = searchParams.get('street') ?? '';
  const jk = searchParams.get('jk') ?? '';

  return (
    <div className="page-title dark-background aos-init aos-animate" data-aos="fade">
      <div className="container">
        <Breadcrumbs
          jk={jk}
          street={street}
          dataApp={dataApp}
        />
        <h1>{dataApp[jk] ? dataApp[jk].jkTitle : ''}</h1>
        <Content/>
      </div>
    </div>
  )
}

export default Document;

function Content() {
  return (
    <div className="row gy-4">
      <div className="col-lg-8">
        <div
          className="portfolio-details-slider swiper init-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">

          <div className="swiper-wrapper align-items-center" id="swiper-wrapper-2f6687a6a8b08d24" aria-live="off">
            <div
              className="swiper-slide"
              style={{backgroundImage: "url(https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_19_55.jpg)"}}
              role="group"
              aria-label="1 / 5">
            </div>
            <div
              className="swiper-slide"
              style={{backgroundImage: "url(https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_20_14.jpg)"}}
                 role="group" aria-label="2 / 5">
            </div>
            <div className="swiper-slide"
                 style={{backgroundImage: "url(https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_20_31.jpg)"}}
                 role="group" aria-label="3 / 5">
            </div>
            <div
              className="swiper-slide swiper-slide-prev"
              style={{backgroundImage: "url(https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_20_48.jpg)"}}
              role="group"
              aria-label="4 / 5">
            </div>
            <div className="swiper-slide swiper-slide-active"
              style={{backgroundImage: "url(https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_21_03.jpg)"}}
              role="group"
              aria-label="5 / 5">
            </div>
          </div>
          <div
            className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 1"/>
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 2"/>
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 3"/>
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 4"/>
            <span
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 5"
              aria-current="true"/>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="portfolio-info aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <h3>Евродвушка</h3>
          <ul>
            <li><strong>Категория</strong>: Комплектация "Под ключ</li>
            <li><strong>Бюджет</strong>: 1320000₽</li>
            <li><strong>Дата завершения</strong>: 15.08.2025</li>
            <li>
              <strong>Проект URL</strong>:
              <a href="https://t.me/homeupakovka">
                <i className="bi bi-telegram" style={{paddingLeft: 4}}>Телеграм канал</i>
              </a>
            </li>
          </ul>
        </div>

        <div className="portfolio-description aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
          <h2>Произведенные работы</h2>
          <ul>
            <li>покрасили стены</li>
            <li>отрегулировали окна, поставили москитные сетки</li>
            <li>поменяли унитаз, и все смесители от застройщика</li>
            <li>перенесли розетки в спальне и гостинной</li>
            <li>приняли большую часть доставок и собрали мебель.</li>
          </ul>
        </div>
      </div>

    </div>
  )
}
