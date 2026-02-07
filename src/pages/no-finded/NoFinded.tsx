import {Link} from "react-router";
import './no-finded.styles.scss';

export const NoFinded = () => {

  return (

    <div id="no-finded" className="no-finded">
      <h1>404</h1>
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"/>
        </div>
      </div>

      <div className="info">
        <h2>Мы не нашли страницу</h2>
        <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>
        <p>Мы почти уверены, что эта страница раньше была здесь, но, похоже, исчезла. Приносим свои извинения от её имени.</p>
        <Link to={'/'} rel={'noreferrer noopener'}>Главная страница</Link>
      </div>
    </div>
  )
}