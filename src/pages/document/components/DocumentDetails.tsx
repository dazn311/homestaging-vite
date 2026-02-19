import {Flex, Table} from "antd";
import {motion} from "motion/react";
import ImagesBlock from "./images-block/ImagesBlock.tsx";
import {docColumns, docColumnsWork} from "../dataDoc.ts";
import {type TDataSourceDto} from "../../../api/getDocDetails.ts";
import type {TDocSource} from "../../../types/documents.ts";

export function DocumentDetails({data}:{ data: TDocSource}) {


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
          items={[
            "https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_19_55.jpg",
            "https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_20_14.jpg",
            "https://homesstaging.online/uploads/ilyinskie21/21/20250906_04_20_31.jpg"
          ]}
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

          <Table size={'small'}
                 bordered
                 showHeader={false}
                 title={() => 'Произведенные работы'}
                 dataSource={data.dataWork}
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