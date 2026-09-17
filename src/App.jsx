import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import Hero from "./components/hero"
import ProductCard from './components/products'
import Categories from './components/categories'
import Featured from './components/featured'
import WhySonara from './components/why'
import Footer from './components/footer'
import Reviews from './components/reviews'
import Newsletter from './components/newsletter'

function App() {
  const [footeri, setfooteri] = useState(null)
  const [hero, setHero] = useState(null)
  const [product, setProduct] = useState([])
  const [favItems, setFavItems] = useState([]);
  const [cardItems, setCardItems] = useState([])
  const addToCard = (product) => {
    setCardItems(prev => {
      if (prev.some(item => item.id === product.id)){
        return prev
      }
      return [...prev, product]
    })
  }
  const addToFav = (product) => {
  setFavItems(prev => {
    if (prev.some(item => item.id === product.id)) {
      return prev;
    }

    return [...prev, product];
  });
};
console.log(favItems);
 useEffect(() => {
  fetch("../src/assets/dataBase.json")
    .then(res => res.json())
    .then(data => {
      setHero(data.heroImage),
      setProduct(data.products),
      setfooteri(data.footerImage)
    })
    .catch(err => console.log(err))
}, [])

  return (
    <>
    <Header favItems={favItems} cardItems={cardItems} />
    <Hero 
    heroImage={hero}
    />
    <main>
      <div className='pWrapper' >
      {product.map(product => {
        return(
        <ProductCard
        key = {product.id}
        product = {product}
        addToFav = {addToFav}
        addToCard={addToCard}
        ></ProductCard>)
      })}
      </div>
      <Categories/>
      <Featured />
      <WhySonara/>
      <Reviews/>
      <Newsletter/>
    </main>
    <footer>
      <Footer footerImage={footeri}/>
    </footer>
    </>
  )
}

export default App
