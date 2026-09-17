import "./why.css";

function WhySonara() {
  const features = [
    {
      number: "01",
      title: "Premium Audio",
      text: "Engineered for detailed sound, deep bass and an immersive listening experience."
    },
    {
      number: "02",
      title: "Fast Delivery",
      text: "Get your audio gear delivered quickly and safely to your doorstep."
    },
    {
      number: "03",
      title: "Secure Shopping",
      text: "A reliable shopping experience designed with your security in mind."
    },
    {
      number: "04",
      title: "Expert Support",
      text: "Our team is here whenever you need help choosing the right gear."
    }
  ];

  return (
    <section className="why-sonara">

      <div className="why-header">

        <span>THE SONARA STANDARD</span>

        <h2>
          More Than
          <strong> Sound.</strong>
        </h2>

        <p>
          Everything you need for a better audio experience,
          from the first click to the moment you press play.
        </p>

      </div>


      <div className="why-grid">

        {features.map((feature) => (

          <div className="why-card" key={feature.number}>

            <span className="why-number">
              {feature.number}
            </span>

            <div className="why-line"></div>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>

            <span className="why-arrow">
              ↗
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhySonara;