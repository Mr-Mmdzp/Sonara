import "./footer.css";

function Footer({footerImage}) {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

            <div className="logo-wrapper">
          <img className="footer-image" src={footerImage} alt="" />
            </div>
          <p>
            Premium audio engineered for those
            who hear every detail.
          </p>

          <span className="footer-status">
            ● SYSTEM ONLINE
          </span>

        </div>


        <div className="footer-column">

          <h4>Explore</h4>

          <a href="#">Products</a>
          <a href="#">Collections</a>
          <a href="#">Categories</a>
          <a href="#">About</a>

        </div>


        <div className="footer-column">

          <h4>Support</h4>

          <a href="#">Contact</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">FAQ</a>

        </div>


        <div className="footer-column">

          <h4>Follow</h4>

          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">X / Twitter</a>
          <a href="#">Discord</a>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 SONARA. All rights reserved.
        </span>
        <span>
            Developed & Designed By Mr-Mmdzp
        </span>
        <span>
          Designed for better sound.
        </span>

      </div>

    </footer>
  );
}

export default Footer;