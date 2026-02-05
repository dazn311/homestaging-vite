import {PricingItem} from "./PricingItem.tsx";
import {pricingHelpers, pricingItemProps, pricingOnLine} from "../../store/dataApp.ts";
import {TitleBlock} from "../title-block/TitleBlock.tsx";
import './prices.styles.scss';


export const Prices = () => {
  return (
    <section id="pricing" className="pricing section">
      <TitleBlock title={'Прайс'}/>
      <div className="container">
        <div className="row g-4 g-lg-0">
          <div className="col-lg-4" >
            <PricingItem {...pricingOnLine} />
          </div>

          <div className="col-lg-4 featured" >
            <PricingItem {...pricingItemProps} />
          </div>

          <div className="col-lg-4" >
            <PricingItem {...pricingHelpers} />
          </div>
        </div>
      </div>
    </section>
  )
}
