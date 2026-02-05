import {ButtonTelegram} from "../btn-telegram/ButtonTelegram.tsx";

export const Cooperation = () => {

  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <img src="/assets/img/cta-bg.jpg" alt=""/>
      <div className="container">
        <div className="row justify-content-center" style={{opacity: 1}} >
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Интересное</h3>
              <p>Все дополнительные ссылки, проекты в реальном времени, живое общение на моем Телеграм канале</p>
              <ButtonTelegram title={'Перейти'} cls={'telegram'} cls1={'cta-btn'}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}