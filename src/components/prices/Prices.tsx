import {PricingItem} from "./PricingItem.tsx";
import {pricingHelpers, pricingItemProps, pricingOnLine} from "../../store/dataApp.ts";

export const Prices = () => {
  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title mt-3 pb-0" data-aos="fade-up">
        <span>Прайс</span>
        <h2>Прайс</h2>
      </div>
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
