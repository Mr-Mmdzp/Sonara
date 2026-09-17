import "./reviews.css";

function Reviews() {
  const reviews = [
    {
      name: "Alex Morgan",
      role: "Verified Customer",
      text: "The sound quality is incredible. The X1 Max completely changed my daily listening experience.",
      rating: 5
    },
    {
      name: "Daniel Carter",
      role: "Music Producer",
      text: "Clean design, powerful sound and excellent detail. SONARA really nailed the studio experience.",
      rating: 5
    },
    {
      name: "Mia Anderson",
      role: "Verified Customer",
      text: "The earbuds are comfortable, the battery lasts forever and the sound is seriously impressive.",
      rating: 5
    }
  ];

  return (
    <section className="reviews">

      <div className="reviews-header">
        <span>WHAT PEOPLE SAY</span>

        <h2>
          Loved By
          <strong> Listeners.</strong>
        </h2>

        <p>
          Real experiences from people who made SONARA
          part of their everyday sound.
        </p>
      </div>


      <div className="reviews-grid">

        {reviews.map((review, index) => (

          <article className="review-card" key={index}>

            <div className="review-top">

              <div className="stars">
                {"★".repeat(review.rating)}
              </div>

              <span className="quote">"</span>

            </div>


            <p className="review-text">
              {review.text}
            </p>


            <div className="review-user">

              <div className="avatar">
                {review.name.charAt(0)}
              </div>

              <div>
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Reviews;