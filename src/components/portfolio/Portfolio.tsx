import {useRef, useState} from "react";
import {ImageBlockData} from "../../store/dataApp.ts";
import {ImageBlock} from "./ImageBlock.tsx";
import {PortfolioMenu} from "./PortfolioMenu.tsx";
import {TitleBlock} from "../title-block/TitleBlock.tsx";
import {motion, AnimatePresence} from "motion/react";
import {useIsVisible} from "../../hooks/useIsVisible.tsx";
import {activeImages} from "./activeImages.ts";


export const Portfolio = () => {
  const [activeDocId, setActiveDocId] = useState('kronstadskii8k2p2');
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <section
      id="portfolio-anchor"
      ref={ref}
      className="portfolio section">
      <TitleBlock title={'Портфолио проектов'}/>
      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <PortfolioMenu data={ImageBlockData} setActiveDocId={setActiveDocId} activeDocId={activeDocId} />
          <div
            className="row gy-4 isotope-container"
            style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
          >
            <AnimatePresence mode={'wait'}>
              {isVisible && ImageBlockData
                .filter(activeImages(activeDocId))
                .map((item,idx) => {
                  const delay = isVisible ? (idx * 0.2) : 1;
                  return (
                    <motion.div
                      initial={{ x: -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: '100vw', opacity: 0 }}
                      transition={{delay: delay, duration: .5}}
                      className={'div-bg'}
                      key={item.id}
                    >
                      <ImageBlock key={item.id} {...item} />
                    </motion.div>)
                })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

