import "./featured.css";

function Featured() {
  return (
    <section className="featured">

      <div className="featured-image">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
          alt="SONARA X1 Max"
        />
      </div>

      <div className="featured-content">

        <span className="featured-label">
          SONARA · FLAGSHIP SERIES
        </span>

        <h2>
          Sound
          <strong> Without Limits.</strong>
        </h2>

        <p>
          Meet the SONARA X1 Max — engineered for immersive
          sound, adaptive noise cancellation and all-day comfort.
        </p>

        <div className="featured-price">
          <span>$329</span>
          <del>$379</del>
        </div>

        <button className="featured-btn">
          Explore X1 Max
          <span>↗</span>
        </button>

      </div>

      <div className="featured-glow"></div>

    </section>
  );
}

export default Featured;