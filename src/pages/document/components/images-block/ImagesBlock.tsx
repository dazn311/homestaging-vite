import React from 'react';
import {Image} from 'antd';

type ImageBlockProps = {
  items:string[];
}

export const ImagesBlock: React.FC<ImageBlockProps> = ({items}) => (
  <Image.PreviewGroup items={items} >
    <div className={'img-project'} style={{backgroundImage: `url(${items[0]})` }} >
      <Image alt="homestaging image" src={items[0]} />
    </div>
  </Image.PreviewGroup>
);

export default ImagesBlock;
