import type {TServiceItem} from "./TServiceItem.ts";

export function ServiceItem({id,title,description}:TServiceItem) {
  return (
    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="100" style={{opacity: 1}} >
      <span>{id}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}