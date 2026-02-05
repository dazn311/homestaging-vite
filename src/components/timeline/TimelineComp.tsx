import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import {TitleBlock} from "../title-block/TitleBlock.tsx";

const TimelineComp: React.FC = () => (
  <section id="contact" className="contact section">
    <TitleBlock
      title={'Timeline'}
      header={'Временная шкала'}
      body={'Пример поэтапной реализации проекта "Студия"'}/>
    <div className="container" >
      <Timeline
        mode="alternate"
        items={[
          {
            content: 'Заключаем договор 01.03.2026',
          },
          {
            content: 'Замеры помещений 02.03.2026',
          },
          {
            icon: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
            content: `Подготовка мудборда и коллажей будущего интерьера и согласование с заказчиком. с 02.03.2026 по 05.03.2026`,
          },
          {
            icon: <ClockCircleOutlined style={{ fontSize: '16px',color: 'red' }} />,
            content: 'Прием доставок, сборка мебели и техники с 06.03.2026 по 27.03.2026',
            styles: {
              root: {
                height: 100,
              },
              rail: {
                borderStyle: 'dashed',
              },
              content: {
                opacity: 0.9,
                color: 'red',
              },
            },
          },
          {
            content: 'Клининг и профессиональная фотосъёмка готового интерьера с 28.03.2026 по 30.03.2026',
          },
          {
            color: 'green',
            content: 'Сдача готового объекта и передача ключей 30.03.2026',
          },
        ]}
      />
    </div>
  </section>
);

export default TimelineComp;