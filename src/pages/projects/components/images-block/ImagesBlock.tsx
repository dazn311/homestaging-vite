import React from 'react';
import {Image} from 'antd';

const contentStyle: React.CSSProperties = {
  // margin: 0,
  width: 'auto',
  height: 500,
};

export const ImagesBlock: React.FC = () => (
  <Image.PreviewGroup
    items={[
      'https://home.staging.moscow/uploads/ilyinskie21/21/20250906_04_19_55.jpg',
      'https://home.staging.moscow/uploads/ilyinskie21/21/20250906_04_20_14.jpg',
      'https://home.staging.moscow/uploads/ilyinskie21/21/20250906_04_20_31.jpg',
    ]}

  >
    <Image
      alt="webp image"
      style={contentStyle}
      src="https://home.staging.moscow/uploads/ilyinskie21/21/20250906_04_20_14.jpg"
    />
  </Image.PreviewGroup>
);

export default ImagesBlock;