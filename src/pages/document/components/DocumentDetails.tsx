import {Flex, Table} from "antd";
import {motion} from "motion/react";
import ImagesBlock from "./images-block/ImagesBlock.tsx";
import {docColumns, docColumnsWork} from "../dataDoc.ts";
import {type TDataSourceDto} from "../../../api/getDocDetails.ts";
import type {TDocSource, TDocTableWork} from "../../../types/documents.ts";
import {useEffect} from "react";

export function DocumentDetails({data}:{ data: TDocSource}) {
  useEffect(() => {
    document.title = `${data.title} | Хоумстейджинг`;
  }, [data]);

  return (
    <Flex justify={'space-evenly'} wrap={'wrap'} gap={8}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 0.5 }
        }}
        className="col-lg-4">
        <ImagesBlock
          items={data.images}
        />
      </motion.div>

      <div className="col-lg-4">
        <div className="portfolio-info">
          <Table<TDataSourceDto>
            bordered
            title={() => data.titleTab}
            pagination={false}
            showHeader={false}
            dataSource={data.data}
            columns={docColumns}/>
          <div style={{height: 24}}/>

          {data.dataWork && (
            <Table<TDocTableWork>
               size={'small'}
               bordered
               rowKey={record => record.key}
               showHeader={false}
               title={() => 'Произведенные работы'}
               dataSource={data.dataWork}
               columns={docColumnsWork}
               pagination={{
                 total:4,
                 defaultPageSize:4,
                 placement: ['bottomCenter'] }}
            />
          )}

        </div>

      </div>

    </Flex>

  )
}

// const dataSource = [
//   {
//     key: '1',
//     name: 'Категория',
//     description: 'Комплектация "Под ключ"',
//   },
//   {
//     key: '2',
//     name: 'Бюджет',
//     description: '1320000₽',
//   },
//   {
//     key: '3',
//     name: 'Дата завершения',
//     description: '15.08.2025',
//   },
//   {
//     key: '4',
//     name: 'Проект URL',
//     description: <a href="https://t.me/homeupakovka" target="_blank" rel="noopener noreferrer">
//       <i className="bi bi-telegram" style={{paddingLeft: 4}}>Телеграм канал</i>
//     </a>,
//   },
// ].map((d,idx) => {
//   const description = dataDoc2[idx] ? dataDoc2[idx] : d.description;
//   return {...d,description};
// });