import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import {motion} from "motion/react";
import {getVideosBy} from "../../api/project.ts";
import {ScrollTopBtn} from "../../components/scroll-top-btn/ScrollTopBtn.tsx";
import type {TVideoCard} from "../../api/data-video.ts";
import {getSrc} from "./getSrc.ts";
import './video.styles.scss';


function VideoDetail() {
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState<TVideoCard | null>(null);

  const id = searchParams.get('id') || '';

  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
    getVideosBy(id).then(res => {
        if (res) {
          setVideo(res);
          document.title = res.title;
        } else {
          setVideo(null);
          document.title = 'document';
        }
      });
  }, [id, setVideo]);

  return (
    <div className="project-container">
      <div className="container">
        <h2>{id && video ? video.title : 'Видео'}</h2>
        <motion.div
          layoutId={'project-list'}
          initial={{scale: 0, marginLeft: -70}}
          exit={{scale: 0}}
          animate={{
            scale: 1,
            marginLeft: 0,
            transition: {duration: 0.5, delay: 0.2}
          }}
          className={'ant-flex-justify-center'}>
          {id && video &&
            (<video src={getSrc(video,'mp4')} controls={true}/>)
          }
        </motion.div>
      </div>
      <ScrollTopBtn/>
    </div>
  )
}

export default VideoDetail;


