export const Portfolio = () => {

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" >
        <span>ЗАВЕРШЕННЫЕ ПРОЕКТЫ</span>
        <h2>ЗАВЕРШЕННЫЕ ПРОЕКТЫ</h2>
      </div>
      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">Все</li>
            <li data-filter=".filter-<?=$key;?>">projectTitle</li>
          </ul>

          <div className="row gy-4 isotope-container" >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-<?=$key;?>">
              <img src="<?=$PortfolioObj['imageUrl'];?>" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>projectTitle</h4>
                <p>бюджет  млн</p>
                <a href="$PortfolioObj['imageUrl'];?>" title="Увеличить"
                   data-gallery="portfolio-gallery-<?=$key;?>"
                   className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="/?details=<?=$key;?>" title="перейти на страницу <?=$PortfolioObj['projectKey'];?>"
                   className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}