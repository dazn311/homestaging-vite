import {dataServices} from "./dataServices.ts";
import {ServiceItem} from "./ServiceItem.tsx";

export const Services = () => {

  return (
    <section id="cards" className="cards section">
      <div className="container">
        <div className="container section-title" data-aos="fade-up" style={{opacity: 1}} >
          <span>Услуги</span>
          <h2>Услуги</h2>
          <p>Комплектации и хоумстейджинга</p>
        </div>
        <div className="row no-gutters">
          {
            dataServices
              .map((service) => (
                <ServiceItem id={service.id} title={service.title} description={service.description} />))}
        </div>

      </div>

    </section>
  )
}
