import {useState} from "react";
import cn from 'classnames';
import {aboutItems, type PricingItemProps} from "../../store/dataApp.ts";
import './about.styles.scss';


export const About = () => {
  const [isShow, setIsShow] = useState(false);

  return (

    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up" style={{opacity: 1}} >
        <span>Обо мне<br/></span>
        <h2>Рада приветствовать вас,<br/></h2>
        <p>меня зовут <b>Наталия Снимщикова</b>,люблю преображать скучные ремонты от застройщика в уютные
          функциональные пространства для аренды или
          последующей продажи. </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100" style={{opacity: 1}} >
            <img src="/assets/img/natalia.jpg" className="img-fluid" alt="Наталия"/>
          </div>

          <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200" >
            <h3>ПРЕИМУЩЕСТВА</h3>
            <p className="fst-italic">сотрудничества со мной:</p>
            <ul>
              {aboutItems.map((item,index:number) => {
                return <AboutItem key={'about-item-'+index} isShow={isShow} {...item} />
              })}
            </ul>
            <button
              onClick={() => setIsShow(!isShow)}
              className="read-more">
              <BtnCaption isShow={isShow}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function BtnCaption({isShow}: {isShow: boolean}) {
  return isShow ? (
    <>
      <span>коротко</span>
      <i className="bi bi-arrow-up"/>
    </>
  )
  :(
    <>
      <span>читать полность</span>
      <i className="bi bi-arrow-down"/>
    </>
  )
}
function AboutItem({caption,body,isShow}:PricingItemProps & {isShow:boolean}) {
  return (
    <li className={cn('about-item',{'hide': !isShow})}>
      <i className="bi bi-check-circle" />
      <span className={'caption'}>{caption}</span>
      {isShow && <br/>}
      <span className={'body'}>{body}</span>
    </li>
  )
}
