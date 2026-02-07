import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import {type TProject} from "../../store/dataApp.ts";
import ImagesBlock from "./components/images-block/ImagesBlock.tsx";
import {Flex, Table} from "antd";
import './document.styles.scss';
import {docColumns, docColumnsWork} from "./dataDoc.ts";

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
        <h2>{page ? page.jkTitle : ''}</h2>
        <Content/>
      </div>
    </div>
  )
}

export default Document;

function Content() {
  const dataSource = [
    {
      key: '1',
      name: 'Категория',
      description: 'Комплектация "Под ключ"',
    },
    {
      key: '2',
      name: 'Бюджет',
      description: '1320000₽',
    },
    {
      key: '3',
      name: 'Дата завершения',
      description: '15.08.2025',
    },
    {
      key: '4',
      name: 'Проект URL',
      description: <a href="https://t.me/homeupakovka" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-telegram" style={{paddingLeft: 4}}>Телеграм канал</i>
      </a>,
    },
  ];
  const dataWork = [
    {
      key: '1',
      name: 'покрасили стены',
    },
    {
      key: '2',
      name: 'отрегулировали окна, поставили москитные сетки',
    },
    {
      key: '3',
      name: 'поменяли унитаз, и все смесители от застройщика',
    },
    {
      key: '4',
      name: 'перенесли розетки в спальне и гостинной',
    },
  ];



  return (
    <Flex justify={'space-evenly'} wrap={'wrap'} gap={8}>
      <div className="col-lg-4">
        <ImagesBlock/>
      </div>
      <div className="col-lg-4">
        <div className="portfolio-info">
          <Table
            bordered
            title={() => 'Евродвушка'}
            pagination={false}
            showHeader={false}
            dataSource={dataSource}
            columns={docColumns}/>
          <div style={{height: 24}}/>

          <Table size={'small'}
            bordered
            showHeader={false}
            title={() => 'Произведенные работы'}
            dataSource={dataWork}
            columns={docColumnsWork}
            pagination={{
              total:4,
              defaultPageSize:4,
              placement: ['bottomCenter'] }}
            />
        </div>

      </div>

    </Flex>

  )
}
