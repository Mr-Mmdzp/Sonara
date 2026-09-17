import "./hero.css";

function Hero({heroImage}) {
  return (
    <section className="sonara-hero">

      <div className="hero-content">

        <span className="hero-label">
          PREMIUM AUDIO · 2026
        </span>

        <h1>
          Hear
          <span> Everything.</span>
        </h1>

        <p>
          Discover premium audio gear engineered for clarity,
          depth and an experience you can feel.
        </p>

        <div className="hero-buttons">
          <button className="hero-primary">
            Explore Products
            <span>→</span>
          </button>

          <button className="hero-secondary">
            View Collection
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <strong>120+</strong>
            <span>Products</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Support</span>
          </div>

          <div>
            <strong>4.9</strong>
            <span>Average Rating</span>
          </div>
        </div>

      </div>

      <div className="hero-visual">

        <div className="sound-ring ring-one"></div>
        <div className="sound-ring ring-two"></div>
        <div className="sound-ring ring-three"></div>

        <div className="hero-glow"></div>

        <img
          src={heroImage} 
          alt="Premium SONARA headphones"
        />

        <div className="floating-card">
          <span className="card-dot"></span>

          <div>
            <small>Featured</small>
            <strong>SONARA X1</strong>
          </div>

          <span className="card-arrow">↗</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;