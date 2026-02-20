import {ButtonTelegram} from "../../btn-telegram/ButtonTelegram.tsx";
import {useNavigate} from "react-router";
import {LabelA} from "../../navHeader/components/LabelA.tsx";


export const FooterAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="col-lg-4 col-md-6">
      <div className="footer-about">
        <LabelA
          title={'Москва'}
          nextHash={''}
          cls={'logo sitename'}
          navigate={navigate} />
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
  )
}
