import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import React from 'react';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import Checkout from './Checkout';
/*
Home Page
- Displays 3 Condiments
  - Ketchup
  - Kewpie
  - Worcestershire Sauce

- For each condiment
  - Name of condiment
  - Price of condiment per how many oz
  - button to go to buy product

Product Page
  - Displays product information
  - Image of condiment
  - Price of condiment per how many oz
  - Add to cart button
  - product description
  - use cases

Cart Page (?) or just state.
  - Cart holds all the items that have been chosen.
  - Calculates price of cart based on items that have been chosen.   
*/
const App = () => {
  const condiments = {
    1: {
      name: 'Heinz Ketchup',
      size: 14,
      price: 3.19,
      img: './assets/heinz_ketchup_14_oz.jpeg'
    },
    2: {
      name: 'Kewpie Mayonnaise',
      size: 17.64,
      price: 6.19,
      img: './assets/kewpie_17_oz.jpg'
    },
    3: {
      name: 'Meijer Worcestershire Sauce',
      size: 10,
      price: 1.49,
      img: './assets/meijer_worcestershire_10_pz.png'
    }
  };

  const [cartItems, setCartItems] = React.useState({ '1': 0, '2': 0, '3': 0 });
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const newTotal = Object.entries(cartItems).reduce((amount, cartItem) => {
      if (cartItem[0] === '1') {
        return Math.round((amount += cartItem[1] * 3.19) * 100) / 100
      } else if (cartItem[0] === '2') {
        return Math.round((amount += (cartItem[1] * 6.19)) * 100) / 100;
      } else {
        return Math.round((amount += (cartItem[1] * 1.49)) * 100) / 100;
      }
    }, 0);

    setTotal(newTotal);
  }, [cartItems]);
  
  const setProduct = (productId, quantity, e) => {
    e.preventDefault();
    const newObj = {...cartItems};

    newObj[productId] = quantity;
  
    setCartItems(newObj);
  }

  const incrementProductQuantity = (productId, e) => {
    e.preventDefault();
    const oldQuantity = cartItems[productId];
    const newObj = {...cartItems};

    newObj[productId] = oldQuantity + 1;

    setCartItems(newObj);
  }

  const decrementProductQuantity = (productId, e) => {
    e.preventDefault();
    const oldQuantity = cartItems[productId];
   
    if (oldQuantity === 0) {
      return;
    }

    const newObj = {...cartItems};

    newObj[productId] = oldQuantity - 1;
    setCartItems(newObj);
  }

  return (
    <div>
      <BrowserRouter>
      <header>
        <h1><a href='/' >Condiments Shopping Website</a></h1>
        <div>
          {total}
          <Link to={'/checkout'}>Checkout</Link>
        </div>
      </header>
      <Routes>
          <Route path='/' element={<HomePage condiments={condiments} />} />
          <Route path='/product/:productId' element={<ProductPage condiments={condiments} setProduct={setProduct} />} />
          <Route path='/checkout' element={<Checkout total={total} cartItems={cartItems} incrementProduct={incrementProductQuantity} decrementProduct={decrementProductQuantity} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;