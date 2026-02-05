import cn from "classnames";

export const ButtonTelegram = (
  {
    title='',
    cls1='buy-btn',
    cls='telegram',
  }:{title?:string;cls1?:string;cls?:string;}) => {
  return (
    <div className="text-center">
      <a href="https://t.me/homeupakovka" className={cls1}>
        <i className={cn('bi','p-1',`bi-${cls}`)}/>{title}
      </a>
    </div>
  )
}
