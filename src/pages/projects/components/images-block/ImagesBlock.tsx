import React from 'react';
import {Image} from 'antd';
import {baseUrl} from "@/api/data/data-project.ts";

const contentStyle: React.CSSProperties = {
  // margin: 0,
  width: 'auto',
  height: 500,
};

const srcImg = `${baseUrl}/uploads/ilyinskie21/21/20250906_04_20_14.jpg`;

export const ImagesBlock: React.FC = () => (
  <Image.PreviewGroup
    items={[
      `${baseUrl}/uploads/ilyinskie21/21/20250906_04_19_55.jpg`,
      `${baseUrl}/uploads/ilyinskie21/21/20250906_04_20_14.jpg`,
      `${baseUrl}/uploads/ilyinskie21/21/20250906_04_20_31.jpg`,
    ]}
  >
    <Image
      alt="webp image"
      style={contentStyle}
      src={srcImg}
    />
  </Image.PreviewGroup>
);

export default ImagesBlock;