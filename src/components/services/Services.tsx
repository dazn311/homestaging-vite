import {dataServices} from "./dataServices.ts";
import {ServiceItem} from "./ServiceItem.tsx";

export const Services = () => {

  return (
    <section id="service" className="service section">
      <div className="container">
        <div className="container section-title" data-aos="fade-up" style={{opacity: 1}} >
          <span>Услуги</span>
          <h2>Проект «Под ключ»</h2>
          <p>Вместо простого ремонта, мы создаем прибыльный актив.</p>
          <p>Процесс Проекта включает:</p>
        </div>
        <div className="row no-gutters">
          {
            dataServices
              .map((service) => (
                <ServiceItem key={service.id} id={service.id} title={service.title} description={service.description} />))}
        </div>

      </div>

    </section>
  )
}
