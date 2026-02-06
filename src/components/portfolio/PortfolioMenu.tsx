import React, {useState} from "react";
import type {TImageBlockData} from "../../store/dataApp.ts";
import cn from "classnames";

export const PortfolioMenu = ({data}:{data: TImageBlockData[]}) => {
  const [activeDocId, setActiveDocId] = useState('*');

  return (
    <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
      <li
        key="activeDocId*"
        data-filter="*"
        onClick={(event :React.MouseEvent<HTMLElement>) => {
          event.preventDefault();
          setActiveDocId('*');
        }}
        className={cn({'filter-active':activeDocId === '*'})}>Все</li>

      {
        data.reduce<TImageBlockData[]>((accArr,d)=> {
          if (!accArr.some(acc => acc.docId === d.docId)) {
            accArr.push(d);
          }
          return accArr;
        },[])
          .map((item,idx) => {

            return (
              <li
                key={idx}
                onClick={(event :React.MouseEvent<HTMLElement>) => {
                  event.preventDefault();
                  setActiveDocId(item.docId);
                }}
                className={cn({'filter-active':activeDocId === item.docId})}
                data-filter={item.docId}>{item.title}</li>)
          })}
    </ul>
  )
}
