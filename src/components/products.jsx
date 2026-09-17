import { useState } from "react";
import "./products.css";

function ProductCard({ product, addToFav, addToCard }) {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="product-card">

        {/* FAVORITE */}

        <div
          className="add-to-fav-btn fav-btn"
          onClick={() => addToFav(product)}
        >
          ♡
        </div>


        {/* IMAGE */}

        <div
          className="product-image"
          onClick={() => setModalOpen(true)}
        >
          <img
            src={product.image}
            alt={product.name}
          />
        </div>


        {/* INFO */}

        <div className="product-info">

          <span>{product.category}</span>

          <h3>{product.name}</h3>

          <p>{product.description}</p>

          <div className="product-bottom">

            <strong>${product.price}</strong>

            <button onClick={() => addToCard(product)}>
              Add to Cart
            </button>

          </div>

        </div>

      </div>


      {/* =========================
          PRODUCT MODAL
      ========================= */}

      {modalOpen && (

        <div
          className="product-modal-overlay"
          onClick={() => setModalOpen(false)}
        >

          <div
            className="product-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              className="modal-close"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>


            {/* IMAGE */}

            <div className="modal-image">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>


            {/* CONTENT */}

            <div className="modal-content">

              <span className="modal-category">
                {product.category}
              </span>

              <h2>
                {product.name}
              </h2>

              <p>
                {product.description}
              </p>

              <div className="modal-price">
                ${product.price}
              </div>


              <div className="modal-actions">

                <button
                  className="modal-cart"
                  onClick={() => addToCard(product)}
                >
                  Add to Cart
                </button>

                <button
                  className="modal-fav"
                  onClick={() => addToFav(product)}
                >
                  ♡ Add to Favorites
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default ProductCard;