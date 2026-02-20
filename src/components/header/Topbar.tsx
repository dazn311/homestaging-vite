export const Topbar = () => {
  return (
    <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:natalia888@homesstaging.online">natalia888@homesstaging.online</a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span><a href="tel:+7(925) 63-888-30">+7(925) 63-888-30</a></span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="https://t.me/homeupakovka"><i className="bi bi-telegram"></i></a>
          <a href="https://t.me/homeupakovka"><i className="bi bi-facebook"></i></a>
          <a href="https://t.me/homeupakovka"><i className="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>
  )
}