// import React, { useState } from 'react';
import {type TImageBlockData} from "../../store/dataApp.ts";
// import { Button, Image, InputNumber } from 'antd';

//used in Portfolio;
export function ImageBlock({docId,title,price,imageUrl}:TImageBlockData) {
  const urlDoc = `/?details=${docId}`;
  return (
    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-ilinskie-luga-21">
      <div className="div-bg" style={{
        backgroundImage: `url(${imageUrl})`
      }}>
        {/*<Image*/}
        {/*  className="img-fluid"*/}
        {/*  alt={title}*/}
        {/*  src={imageUrl}*/}
        {/*/>*/}
      </div>
      <div className="portfolio-info">
        <h4>{title}</h4>
        <PriceBlock price={price} />
        <a href={urlDoc} title={`перейти на страницу ${title}`}
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
