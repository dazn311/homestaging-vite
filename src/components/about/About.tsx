import {useState} from "react";
import cn from 'classnames';
import {aboutItems, type TAboutItemProps} from "@/store/dataApp.ts";
import {TitleBlock} from "@/components";
import './about.styles.scss';


export const About = () => {
  const [isShow, setIsShow] = useState(false);

  return (

    <section id="about" className="about section">
      <TitleBlock
        title={'Обо мне'}
        header={'Рада приветствовать вас,'} >
        <p>меня зовут <b>Наталия</b>, Я специализируюсь на комплексной упаковке новостроек — создании функциональных, стилистически завершенных пространств «под ключ» для максимально быстрого сбыта и высокой рентабельности.</p>
      </TitleBlock>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100" style={{opacity: 1}} >
            <img src="/assets/img/natalia.jpg" className="img-fluid" alt="Наталия"/>
          </div>

          <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200" >
            <h3>Вы приобрели квартиру,</h3>
            <p className="fst-italic">но вам не нужно разбираться в сантехнических допусках и поиске идеальной фурнитуры. Вы делегируете мне весь процесс, а я отвечаю за:</p>
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
function AboutItem({caption,body,isShow}:TAboutItemProps & {isShow:boolean}) {
  return (
    <li className={cn('about-item',{'hide': !isShow})}>
      <i className="bi bi-check-circle" />
      <span className={'caption'}>{caption}</span>
      {isShow && <br/>}
      <span className={'body'}>{body}</span>
    </li>
  )
}
