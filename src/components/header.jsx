import "./header.css"
import { useState } from "react";

function Header({favItems, cardItems}) {

  const [favOpen, setFavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const totalPrice = cardItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );
    
  return (
    <>
    <header className="sonara-header">
      <div className="sonara-logo">
        <div className="logo-mark">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span className="logo-text">SONARA</span>
      </div>

      <nav className="sonara-nav">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Collections</a>
        <a href="#">About</a>
      </nav>

      <div className="header-actions">
        <button className="icon-btn" aria-label="Search">
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="6.5"></circle>
            <path d="M16 16L21 21"></path>
          </svg>
        </button>

       <button
        className="fav-header-btn icon-btn"
        onClick={() => setFavOpen(true)}
      >
        <svg viewBox="0 0 24 24">
            <path d="M20.8 8.7C20.8 13.5 12 19 12 19S3.2 13.5 3.2 8.7C3.2 5.9 5.1 4 7.7 4c1.7 0 3.3.9 4.3 2.3C13 4.9 14.6 4 16.3 4c2.6 0 4.5 1.9 4.5 4.7Z"></path>
          </svg>
      </button>


      {favOpen && (
        <div
          className="fav-overlay"
          onClick={() => setFavOpen(false)}
        >

          <div
            className="fav-popup"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="fav-close"
              onClick={() => setFavOpen(false)}
            >
              ×
            </button>

            <span className="fav-label">
              YOUR COLLECTION
            </span>

            <h2>Favorites</h2>


            {favItems.length === 0 ? (

              <p className="empty-fav">
                No favorite products yet.
              </p>

            ) : (

              <div className="fav-items">

                {favItems.map((item) => (

                  <div className="fav-item" key={item.id}>

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div>
                      <h3>{item.name}</h3>
                      <span>${item.price}</span>
                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>
      )}

        <button
  className="cart-btn"
  onClick={() => setCartOpen(true)}
>
  <svg viewBox="0 0 24 24">
    <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.5L20 8H6"></path>
    <circle cx="10" cy="20" r="1"></circle>
    <circle cx="18" cy="20" r="1"></circle>
  </svg>

  <span>{cardItems.length}</span>
</button>

        <button className="profile-btn">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="3.5"></circle>
            <path d="M5 20c.8-3.4 3.1-5.2 7-5.2s6.2 1.8 7 5.2"></path>
          </svg>
        </button>
      </div>
    </header>
    {cartOpen && (

  <div
    className="cart-overlay"
    onClick={() => setCartOpen(false)}
  >

    <div
      className="cart-popup"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="cart-close"
        onClick={() => setCartOpen(false)}
      >
        ×
      </button>


      <span className="cart-label">
        YOUR BAG
      </span>

      <h2>
        Shopping Cart
      </h2>


      {cardItems.length === 0 ? (

        <p className="empty-cart">
          Your cart is empty.
        </p>

      ) : (

        <>

          <div className="cart-items">

            {cardItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">

                  <h3>{item.name}</h3>

                  <span>
                    ${item.price}
                  </span>

                </div>

              </div>

            ))}

          </div>


          <div className="cart-total">

            <span>
              Total
            </span>

            <strong>
              ${totalPrice.toFixed(2)}
            </strong>

          </div>


          <button className="checkout-btn">
            Checkout
          </button>

        </>

      )}

    </div>

  </div>

)}
</>
  );
}

export default Header