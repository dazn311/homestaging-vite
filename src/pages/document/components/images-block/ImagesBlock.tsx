import React from 'react';
import {Image} from 'antd';

const contentStyle: React.CSSProperties = {
  // margin: 0,
  width: '100%',
  // height: 500,
};

type ImageBlockProps = {
  items:string[];
}

export const ImagesBlock: React.FC<ImageBlockProps> = ({items}) => (
  <Image.PreviewGroup
    items={items}

  >
    <Image
      alt="webp image"
      style={contentStyle}
      src={items[0]}
    />
  </Image.PreviewGroup>
);

export default ImagesBlock;