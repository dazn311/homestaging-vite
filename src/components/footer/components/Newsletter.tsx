export const Newsletter = () => {
  return (
    <div className="col-lg-4 col-md-12 footer-newsletter">
      <h4>Наша рассылка</h4>
      <p>Подпишитесь на нашу рассылку и получайте последние новости о наших услугах и новых проектах!</p>
      <form action="forms/newsletter.php" method="post" className="php-email-form">
        <div className="newsletter-form">
          <input type="email" name="email"/>
          <input type="submit" value="Подписаться"/>
        </div>
        <div className="loading">Загрузка</div>
        <div className="error-message"></div>
        <div className="sent-message">Ваш запрос на подписку отправлен. Спасибо!</div>
      </form>
    </div>
  )
}
