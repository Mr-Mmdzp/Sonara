import "./newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <span>STAY IN THE SOUND</span>

        <h2>
          Don't Miss
          <strong> What's Next.</strong>
        </h2>

        <p>
          Get updates about new products, exclusive releases
          and everything happening at SONARA.
        </p>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button>
            Subscribe
            <span>→</span>
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;