import {TitleBlock} from "../title-block/TitleBlock.tsx";

export const Contact = () => {

  return (
    <section id="contact" className="contact section">
      <TitleBlock
        title={'Контакты'}
        body={'Основное место г. Москва, СЗАО, Митино'}/>

      <div className="container" >
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-geo-alt"></i>
              <h3>Адрес</h3>
              <p>125222. г. Москва, СЗАО, Митино</p>
              <p>г. Красногорск</p>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-telephone"></i>
              <h3>Позвонить</h3>
              <p><a href="tel:+7 (925) 63-888-30">+7 (925) 63-888-30</a></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <div className="info-item d-flex flex-column justify-content-center align-items-center" >
              <i className="bi bi-telegram"></i>
              <h3>Написать</h3>
              <p><a href="https://t.me/Natalia_Snim">@Natalia_Snim</a></p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-envelope"></i>
              <h3>Эл.почта</h3>
              <p><a href="mailto:natalia888@homesstaging.online">natalia888@homesstaging.online</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}