import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import {type TProject} from "../../store/dataApp.ts";
import {getProject} from "../../api/project.ts";
import { Card, Flex } from 'antd';
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
        if (res.length) {
          document.title = res[0].jkTitle;
        }
        setPages(res);
      });
  }, [jkName, setPages]);

  return (
    <div className="document-container">
      <div className="container">
        <h2>{pages[0] ? pages[0].jkTitle : ''}</h2>
        <Flex justify="center" gap={8} wrap={true} >
          {pages.map((item) => (<Card
            hoverable
            style={{ width: 240 }}
            cover={
              <ImagesBlock items={item.images} />
            }
          >
            <Meta title={item.jkTitle} description={item.street} />
          </Card>))}
        </Flex>

      </div>
    </div>
  )
}

export default Projects;

