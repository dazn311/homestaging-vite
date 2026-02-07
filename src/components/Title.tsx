// import {HeaderAnim} from "./header-anim/HeaderAnim.tsx";

export const Title = () => {

  return (

    <section id="titte-app" className="titte-app section dark-background">
      <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in" style={{opacity: 1}} />
      <div className="container" data-aos="fade-up" data-aos-delay="100" style={{opacity: 1}} >

        <div className="row justify-content-start">
          <div className="col-lg-8">
            <h2>Делаю стильные и уютные квартиры под ключ</h2>
            <p>Обустройство объекта с максимальным результатом, при вашем минимальном участии</p>
          </div>
        </div>
      </div>
      {/*<HeaderAnim/>*/}
    </section>
  )
}