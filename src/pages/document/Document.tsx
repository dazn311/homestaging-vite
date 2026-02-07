import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import {type TProject} from "../../store/dataApp.ts";
import ImagesBlock from "./components/images-block/ImagesBlock.tsx";
import {Flex} from "antd";
import './document.styles.scss';

function Document() {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState<TProject | null>(null);

  const id = searchParams.get('id') ?? '';

  useEffect(() => {
    fetch('/api/projects.json')
      .then(res => res.json())
      .then((res: TProject[]) => {
        const data = res.filter(item => item.id === id);
        const dataOjb = data.length > 0 ? data[0] : null;
        setPage(dataOjb);
      });
  }, [id, setPage]);

  return (
    <div className="document-container">
      <div className="container">
        <h1>{page ? page.jkTitle : ''}</h1>
        <Content/>
      </div>
    </div>
  )
}

export default Document;

function Content() {
  return (
    <Flex justify={'space-between'} gap={8}>
      <div className="col-lg-4">
        <ImagesBlock/>
      </div>
      <div className="col-lg-4">
        <div className="portfolio-info">
          <h3>Евродвушка</h3>
          <ul>
            <li><strong>Категория</strong>: Комплектация "Под ключ</li>
            <li><strong>Бюджет</strong>: 1320000₽</li>
            <li><strong>Дата завершения</strong>: 15.08.2025</li>
            <li>
              <strong>Проект URL</strong>:
              <a href="https://t.me/homeupakovka">
                <i className="bi bi-telegram" style={{paddingLeft: 4}}>Телеграм канал</i>
              </a>
            </li>
          </ul>
        </div>

        <div className="portfolio-description aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
          <h2>Произведенные работы</h2>
          <ul>
            <li>покрасили стены</li>
            <li>отрегулировали окна, поставили москитные сетки</li>
            <li>поменяли унитаз, и все смесители от застройщика</li>
            <li>перенесли розетки в спальне и гостинной</li>
            <li>приняли большую часть доставок и собрали мебель.</li>
          </ul>
        </div>
      </div>

    </Flex>

  )
}
