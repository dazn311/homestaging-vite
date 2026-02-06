import {ImageBlockData} from "../../store/dataApp.ts";
import {ImageBlock} from "./ImageBlock.tsx";
import {PortfolioMenu} from "./PortfolioMenu.tsx";
import {TitleBlock} from "../title-block/TitleBlock.tsx";
import {useState} from "react";

export const Portfolio = () => {
  const [activeDocId, setActiveDocId] = useState('*');

  return (
    <section id="portfolio" className="portfolio section">
      <TitleBlock title={'Портфолио проектов'}/>
      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <PortfolioMenu data={ImageBlockData} setActiveDocId={setActiveDocId} activeDocId={activeDocId} />
          <div className="row gy-4 isotope-container" >
            {ImageBlockData.filter(im => {
              return im.docId === activeDocId || /^\*$/.test(activeDocId);
            }).map((item,idx) => (<ImageBlock key={idx} {...item} />))}
          </div>
        </div>
      </div>
    </section>
  )
}
