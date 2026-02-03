import type {TPricingItemProps, TTitlePrice} from "../../store/dataApp.ts";

export function PriceTitle({id,title,price}:TTitlePrice) {
  return (
    <div key={id} style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
      <h3>{title}</h3>
      <h5>{price} тыс. ₽</h5>
    </div>
  )
}

export function PricingItem({caption,titles,items}:TPricingItemProps) {
  return (
    <div className="pricing-item">
      <h3>{caption}</h3>
      {titles.map(({id,title,price})=> {
        return <PriceTitle key={'PriceTitle1' + id} id={id} title={title} price={price}/>
      })}

      <ul>
        {items.map(item => {
          return (
            <li key={item.id}><i className="bi bi-check"></i> <span>{item.body}</span></li>
          )
        })}
      </ul>
      <div className="text-center">
        <a href="https://t.me/homeupakovka" className="buy-btn">
          <i className="bi bi-telegram p-1"></i>Заказать
        </a>
      </div>
    </div>
  )
}