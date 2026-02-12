import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router";
import {LayoutGroup, motion} from "motion/react";
import {type TProject} from "../../store/dataApp.ts";
import {getProject} from "../../api/project.ts";
import {Card} from 'antd';
import ImagesBlock from "../document/components/images-block/ImagesBlock.tsx";
import './projects.styles.scss';

const {Meta} = Card;

function Projects() {
  const [searchParams] = useSearchParams();
  const [pages, setPages] = useState<TProject[]>([]);

  const jkName = searchParams.get('jkName') ?? '';

  useEffect(() => {
    getProject(jkName)
      .then(res => {
        console.log(res);
        if (/^all$/.test(jkName)) {
          document.title = 'Все проекты';
        } else if (res.length) {
          document.title = res[0].jkTitle;
        }
        setPages(res);
      });
  }, [jkName, setPages]);

  return (
    <div className="project-container">
      <div className="container">
        <h2>{pages[0] && !/^all$/i.test(jkName) ? pages[0].jkTitle : 'Все проекты'}</h2>
        <motion.div
          layoutId={'project-list'}
          initial={{ scale: 0,marginLeft: -70 }}
          exit={{scale:0}}
          animate={{
            scale: 1,
            marginLeft: 0,
            transition: { duration: 0.5, delay:0.2 }
          }}
          className={'ant-flex-justify-center'}
          style={{gap:4, display: 'flex', flexWrap:'wrap'}}>
          {pages.map((item) => (
            <LayoutGroup id={'project-list'}>
              <Card
                hoverable
                style={{width: 200}}
                cover={
                  <ImagesBlock items={item.images}/>
                }
              >
                <Meta title={item.jkTitle} description={item.street}/>
                <Link to={`/document?id=${item.id}`} title={`перейти на страницу ${item.jkTitle}`}
                      className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </Link>
              </Card>
            </LayoutGroup>))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects;

