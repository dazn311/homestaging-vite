import {useRef, useState} from "react";
import {ImageBlockData} from "../../store/dataApp.ts";
import {ImageBlock} from "./ImageBlock.tsx";
import {PortfolioMenu} from "./PortfolioMenu.tsx";
import {TitleBlock} from "../title-block/TitleBlock.tsx";
import {motion, AnimatePresence} from "motion/react";
import {useIsVisible} from "../../hooks/useIsVisible.tsx";
import {activeImages} from "./activeImages.ts";


export const Portfolio = () => {
  const [activeDocId, setActiveDocId] = useState('8');
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
          <PortfolioMenu data={ImageBlockData} setActiveDocId={setActiveDocId} activeDocId={activeDocId}/>
          <motion.div
            layout={true}
            className="row gy-4 isotope-container"
            style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
          >
            <AnimatePresence mode={'wait'}>
              {isVisible && ImageBlockData
                .filter(activeImages(activeDocId))
                .map((item, idx) => {
                  const delay = isVisible ? (idx * 0.2) : 1;
                  return (
                    <motion.div
                      initial={randomInit()}
                      animate={{x: 0, y: 0, opacity: 1, scale: 1}}
                      exit={{
                        opacity: 0, scale: 0, transition: {
                          delay: 0, duration: .2
                        }
                      }}
                      transition={{delay: delay, duration: .5}}
                      className={'div-bg'}
                      key={item.id}
                    >
                      <ImageBlock key={item.id} {...item} />
                    </motion.div>)
                })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


let nextAnim = 1;

function randomInit() {

  switch (nextAnim) {
    case 1:
    case 2:
    case 3:
      nextAnim = nextAnim + 1;
      return {x: -0, y: -220, opacity: 0, scale: 1};
    case 4:
    case 5:
    case 6:
      nextAnim = nextAnim + 1;
      return {x: -0, y: 120, opacity: 0, scale: 1};
    case 7:
    case 8:
    case 9:
      if (nextAnim === 9) {
        nextAnim = 1;
      } else {
        nextAnim = nextAnim + 1;
      }


      return {x: -200, y: 0, opacity: 0, scale: 1}
    default:
      return {x: -200, y: 0, opacity: 0, scale: 1}
  }
}