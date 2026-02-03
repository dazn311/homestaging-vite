import cn from "classnames";

export const ButtonTelegram = (
  {
    title='',
    cls='telegram'
  }:{title?:string;cls?:string;}) => {
  return (
    <div className="text-center">
      <a href="https://t.me/homeupakovka" className="buy-btn">
        <i className={cn('bi','p-1',`bi-${cls}`)}/>{title}
      </a>
    </div>
  )
}
