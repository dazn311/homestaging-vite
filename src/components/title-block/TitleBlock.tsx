import React from "react";
import './title-block.styles.scss';

type TTitleBlockProps = {
  title: string;
  header?: string;
  body?: string;
  children?: React.ReactNode;
}

export const TitleBlock = ({title,header,body,children}:TTitleBlockProps) => {
  return (
    <div className="container section-title" data-aos="fade-up" style={{opacity: 1}} >
      <span>{title}<br/></span>
      <h2>{header ? header : title}<br/></h2>
      {body && body}
      {children && children}
    </div>
  )
}
