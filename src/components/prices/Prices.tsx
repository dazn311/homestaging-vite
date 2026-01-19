export const Prices = () => {
  const viewportWidth = window.innerWidth;//1728

  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title mt-3 pb-0" data-aos="fade-up">
        <span>Прайс</span>
        <h2>Прайс</h2>
      </div>
      <div className="container">
        {(viewportWidth > 500)
        ? (
            <div className="row g-4 g-lg-0">
              <div className="col-lg-4" >
                <div className="pricing-item">
                  <h3>Студия</h3>
                  <h4><sup>₽</sup>150<span>тыс</span></h4>
                  <ul>
                    <li><i className="bi bi-check"></i> <span>замер, анализ ЦА, выбор планировочного решения всей квартиры</span>
                    </li>
                    <li><i className="bi bi-check"></i> <span>смета и последующий подбор всей мебели, техники и декора</span>
                    </li>
                    <li><i className="bi bi-check"></i> <span>визуализация в виде коллажей (2d)</span></li>
                    <li><i className="bi bi-check"></i> <span>закупка и прием всех материалов на объект</span></li>
                    <li><i className="bi bi-check"></i> <span>сборка мебели и техники, покраска стен и пр.</span>
                    </li>
                    <li><i className="bi bi-check"></i> <span>клининг и стейджинг, фотосъемка объекта</span></li>
                  </ul>
                  <div className="text-center">
                    <a href="https://t.me/homeupakovka" className="buy-btn">
                      <i className="bi bi-telegram p-1"></i>Заказать
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 featured" >
                <div className="pricing-item">
                  <h3>1-комнатная</h3>
                  <h4><sup>₽</sup>180<span>тыс</span></h4>
                  <ul>
                    <li><i className="bi bi-check"></i> <span>замер, анализ ЦА, выбор планировочного решения всей квартиры</span>
                    </li>
                    <li><i className="bi bi-check"></i> <span>смета и последующий подбор всей мебели, техники и декора</span>
                    </li>
                    <li><i className="bi bi-check"></i> <span>визуализация в виде коллажей (2d)</span></li>
                    <li><i className="bi bi-check"></i> <span>закупка и прием всех материалов на объект</span></li>
                    <li><i className="bi bi-check"></i> <span>сборка мебели и техники, покраска стен и пр.</span>
                    </li>
                    <li><i className="bi bi-check"></i> <span>клининг и стейджинг, фотосъемка объекта</span></li>
                  </ul>
                  <div className="text-center">
                    <a href="https://t.me/homeupakovka" className="buy-btn">
                      <i className="bi bi-telegram p-1"></i>Заказать
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" >
                <div className="pricing-item">
                  <h3>2/3-х комнатная</h3>
                  <h4><sup>₽</sup>200<span>тыс</span></h4>
                  <ul>
                    <li><i className="bi bi-check"></i> <span>замер, анализ ЦА, выбор планировочного решения всей квартиры</span>
                    </li>
                    <li><i className="bi bi-check"></i> <span>смета и последующий подбор всей мебели, техники и декора</span>
                    </li>
                    <li><i className="bi bi-check"></i> <span>визуализация в виде коллажей (2d)</span></li>
                    <li><i className="bi bi-check"></i> <span>закупка и прием всех материалов на объект</span></li>
                    <li><i className="bi bi-check"></i> <span>сборка мебели и техники, покраска стен и пр.</span>
                    </li>
                    <li><i className="bi bi-check"></i> <span>клининг и стейджинг, фотосъемка объекта</span></li>
                  </ul>
                  <div className="text-center">
                    <a href="https://t.me/homeupakovka" className="buy-btn">
                      <i className="bi bi-telegram p-1"></i>Заказать
                    </a>
                  </div>
                </div>
              </div>
            </div>

          )
        : (
            <div className="featured" >
              <div className="pricing-item text-white">
                <div>Студия от 150<span>тыс</span><sup>₽</sup></div>
                <div>1-комнатная от 180<span>тыс</span><sup>₽</sup></div>
                <div>2/3-комнатная от 200<span>тыс</span><sup>₽</sup></div>
                <ul>
                  <li><i className="bi bi-check"></i>
                    <span>замер, анализ ЦА, выбор планировочного решения всей квартиры</span>
                  </li>
                  <li><i className="bi bi-check"></i>
                    <span>смета и последующий подбор всей мебели, техники и декора</span>
                  </li>
                  <li><i className="bi bi-check"></i> <span>визуализация в виде коллажей (2d)</span></li>
                  <li><i className="bi bi-check"></i> <span>закупка и прием всех материалов на объект</span></li>
                  <li><i className="bi bi-check"></i> <span>сборка мебели и техники, покраска стен и пр.</span>
                  </li>
                  <li><i className="bi bi-check"></i> <span>клининг и стейджинг, фотосъемка объекта</span></li>
                </ul>
                <div className="text-center">
                  <a href="https://t.me/homeupakovka" className="buy-btn">
                    <i className="bi bi-telegram p-1"></i>Заказать
                  </a>
                </div>
              </div>
            </div>
          )}
      </div>
    </section>
  )
}