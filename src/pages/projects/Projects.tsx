import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router";
import {type TProject} from "../../store/dataApp.ts";
import {getProject} from "../../api/project.ts";
import {Card, Flex} from 'antd';
import ImagesBlock from "../document/components/images-block/ImagesBlock.tsx";
import './projects.styles.scss';

const { Meta } = Card;

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
        <Flex justify="center" gap={4} wrap={true} >
          {pages.map((item) => (<Card
            hoverable
            style={{ width: 200 }}
            cover={
              <ImagesBlock items={item.images} />
            }
          >
            <Meta title={item.jkTitle} description={item.street} />
            <Link to={`/document?id=${item.id}`} title={`перейти на страницу ${item.jkTitle}`}
                  className="details-link">
              <i className="bi bi-link-45deg"></i>
            </Link>
          </Card>))}
        </Flex>
      </div>
    </div>
  )
}

export default Projects;

