import React, {useState} from 'react';
import {type TImageBlockData} from "../../store/dataApp.ts";
import {Image} from 'antd';
import cn from "classnames";

//used in Portfolio;
export function ImageBlock({docId,title,price,imageUrl,cls}:TImageBlockData) {
  const [open, setOpen] = useState(false);
  const urlDoc = `/?details=${docId}`;

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    // @ts-ignore
    const localName = event.target.localName ?? '';
    if (/svg/.test(localName)) {
      return;
    }
    event.preventDefault();
    setOpen(!open);
  }
  // const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
  //   const touch = event.touches[0];
  //   console.log(`Touch moved to: ${touch.clientX}, ${touch.clientY}`);
  // };

  return (
    <div className={cn("col-lg-4 col-md-6 portfolio-item isotope-item",docId,cls)}>
      <div
        className="div-bg"
        onClick={onClickHandler}
        // onTouchMove={handleTouchMove}
        style={{backgroundImage: `url(${imageUrl})`}}>
        <Image
          style={{ display: 'none' }}
          alt={title}
          src={imageUrl}
          preview={{
            open,
            scaleStep:0.5,
            src: imageUrl,
            onOpenChange: (value) => {
              setOpen(value);
            },
          }}
        />
      </div>
      <div className="portfolio-info">
        <h4>{title}</h4>
        <PriceBlock price={price}/>
        <a href={imageUrl} onClick={onClickHandler} title="Увеличить"
           data-gallery="portfolio-gallery-rimskogoKorsakova9152" className="glightbox preview-link">
          <i className="bi bi-zoom-in"></i>
        </a>
        <a href={urlDoc} title={`перейти на страницу ${title}`}
           className="details-link">
          <i className="bi bi-link-45deg"></i>
        </a>
      </div>
    </div>
  )
}

function PriceBlock({price}: { price: number }) {
  const isBigPrice = price >= 1000000;
  const priceRes = isBigPrice ? (price / 1000000).toFixed(2)
    : (price / 1000).toFixed();
  const mln = isBigPrice ? 'млн' : 'тыс';
  return (
    <p>бюджет {priceRes} {mln}. руб</p>
  )
}
