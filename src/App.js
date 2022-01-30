import './App.css';
import React, { useState } from "react";
import NavBar from './components/NavBar/NavBar';
import Home from "./components/Home"
import ProductPage from "./components/ProductPage"
import ProductList from './components/ProductList/ProductList';
import Cart from '../src/components/Cart/Cart'
import { Route, Switch, } from 'react-router-dom'

function App() {
  //onClick of cart icon add product id to cart.
  const [cart, setCart] = useState({})
  const [cartItems, setCartItems] = useState(0)
  function handleAddToCart(e, id) {
    console.log('YEO')
    console.log(e, id)
    setCartItems((cartItems) => cartItems + 1)
  }

  return (
    <div className="App">
      <NavBar cartItems={cartItems} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/marketplace'>
          <ProductList onAddToCart={handleAddToCart} />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
