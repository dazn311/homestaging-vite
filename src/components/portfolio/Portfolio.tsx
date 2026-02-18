import {useState} from "react";
import {ImageBlockData} from "../../store/dataApp.ts";
import {ImageBlock} from "./ImageBlock.tsx";
import {PortfolioMenu} from "./PortfolioMenu.tsx";
import {TitleBlock} from "../title-block/TitleBlock.tsx";
import {motion, AnimatePresence} from "motion/react";

export const Portfolio = () => {
  const [activeDocId, setActiveDocId] = useState('kronstadskii8k2p2');

  return (
    <section id="portfolio-anchor" className="portfolio section">
      <TitleBlock title={'Портфолио проектов'}/>
      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <PortfolioMenu data={ImageBlockData} setActiveDocId={setActiveDocId} activeDocId={activeDocId} />
          <div
            className="row gy-4 isotope-container"
            style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
          >
            <AnimatePresence>
              {ImageBlockData
                .filter(im => {
                  return im.docId === activeDocId || /^\*$/.test(activeDocId);
                })
                .map((item,idx) => (
                  <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100vw', opacity: 0 }}
                    transition={{delay: idx * 0.2, duration: .5}}
                    className={'div-bg'}
                    key={item.id}
                  >
                    <ImageBlock key={item.id} {...item} />
                  </motion.div>))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
