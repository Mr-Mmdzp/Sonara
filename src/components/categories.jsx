import "./categories.css";

function Categories() {
  const categories = [
    {
      title: "Headphones",
      subtitle: "Immersive Sound",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      title: "Earbuds",
      subtitle: "Freedom to Listen",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1"
    },
    {
      title: "Speakers",
      subtitle: "Sound Everywhere",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d"
    },
    {
      title: "Microphones",
      subtitle: "Studio Quality",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc"
    }
  ];

  return (
    <section className="categories">

      <div className="categories-header">
        <div>
          <span>EXPLORE SONARA</span>

          <h2>
            Find Your <strong>Sound.</strong>
          </h2>
        </div>

        <p>
          From immersive headphones to professional studio gear,
          discover the equipment that fits your sound.
        </p>
      </div>


      <div className="categories-grid">

        {categories.map((category) => (

          <div
            className="category-card"
            key={category.title}
            style={{
              backgroundImage: `url(${category.image})`
            }}
          >

            <div className="category-overlay"></div>

            <div className="category-content">

              <span>{category.subtitle}</span>

              <h3>{category.title}</h3>

              <button>
                Explore
                <span>↗</span>
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;