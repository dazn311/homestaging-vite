import {type TImageBlockData} from "../../store/dataApp.ts";
import {Image} from 'antd';


export function ImageBlock({id,title,price,imageUrl}:TImageBlockData) {

  return (
    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-ilinskie-luga-21">
      <Image
        id={'image_'+id}
        className="img-fluid"
        alt={title}
        src={imageUrl}
      />
      <div className="portfolio-info">
        <h4>{title}</h4>
        <PriceBlock price={price} />
        <a href="/?details=ilinskie-luga" title="перейти на страницу <?=$PortfolioObj['projectKey'];?>"
           className="details-link">
          <i className="bi bi-link-45deg"></i>
        </a>
      </div>
    </div>
  )
}

function PriceBlock({price}: { price:number }) {
  const isBigPrice= price >= 1000000;
  const priceRes = isBigPrice ? (price/1000000).toFixed(2)
    :(price/1000).toFixed();
  const mln = isBigPrice ? 'млн' : 'тыс';
  return (
    <p>бюджет {priceRes} {mln}. руб</p>
  )
}