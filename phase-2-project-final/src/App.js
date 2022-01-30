import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from './components/NavBar/NavBar';
import Home from "./components/Home/Home"
import ProductList from './components/ProductList/ProductList';
import Cart from '../src/components/Cart/Cart'
import { Route, Routes, } from 'react-router-dom'
import ProductForm from './components/ProductList/ProductForm';


function App() {
  //onClick of cart icon add product id to cart.
  const [cartItems, setCartItems] = useState()
  const [products, setProducts] = useState([])

  //Cart counter
  function initialCartCount(products){
    const cartCount = products.filter(product => product.quantity > 0)
    const reducer = (previousValue, currentValue) => previousValue.quantity + currentValue.quantity;
    
    const itemsInCart = (cartCount.reduce(reducer)); 
    setCartItems(itemsInCart)
  }

  //FETCH DATA
  useEffect(() => {
      fetch("http://localhost:3004/products")
        .then(resp => resp.json())
        .then(data => {
          setProducts(data)
          initialCartCount(data)
        })
    }, [])

    
  function onUpdateProduct(updatedProduct) {
    const updatedProductArray = products.map((product) => {
      if (product.id === updatedProduct.id) {
        return updatedProduct;
      } else {
        return product;
      }
    });
    setProducts(updatedProductArray);
  }

  function handleAddToCart(e, id) {
    const result = products.filter(product => product.id === id);
    const newObject = (result[0].quantity) + 1

    fetch(`http://localhost:3004/products/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newObject}),
      })
        .then((r) => r.json())
        .then((updatedProduct) => {
          onUpdateProduct(updatedProduct)
        
        });

      setCartItems((cartItems) => cartItems + 1)
  }

  function onCartAdd(e, id){
    const result = products.filter(product => product.id === id);
    const newObject = (result[0].quantity) + 1

    fetch(`http://localhost:3004/products/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newObject}),
      })
        .then((r) => r.json())
        .then((updatedProduct) => {
          onUpdateProduct(updatedProduct);
        });

      setCartItems((cartItems) => cartItems + 1)
      
  }

  function onCartRemove(e, id){
    const result = products.filter(product => product.id === id);
    const newObject = (result[0].quantity) - 1

    fetch(`http://localhost:3004/products/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newObject}),
      })
        .then((r) => r.json())
        .then((updatedProduct) => {
          onUpdateProduct(updatedProduct);
        });

      setCartItems((cartItems) => cartItems - 1)
  }

  function onCartRemoveAll(e, id){
    const result = products.filter(product => product.id === id);
    
    const newObject = (result[0].quantity) - (result[0].quantity)

    fetch(`http://localhost:3004/products/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newObject}),
      })
        .then((r) => r.json())
        .then((updatedProduct) => {
          onUpdateProduct(updatedProduct);
        });

      setCartItems((cartItems) => cartItems - (result[0].quantity))
  }

  const [uploadFormView, setUploadFormView] = useState(false)

  function toggleForm() {
    setUploadFormView(!uploadFormView);
  }

  function pushSubmit(dataArray) {
    const newProduct = dataArray
    
    const newProductList = [...products, newProduct]

    console.log(newProductList)
    setProducts(newProductList)

    fetch("http://localhost:3004/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newProduct)
    })
      .then(resp => resp.json())
      .then((data) => console.log(data))
  }
  

    function sortShoesAscending() {
    
        // Use the spread (...) operator to clone the state / prompt React to ackowledge the state change
        let originalList = [...products];
        
        // .sort() "sorts" the elements of an array and returns the sorted array.
        const sortedList = originalList.sort((currentShoe, nextShoe) => {
          let priceCurrentShoe = currentShoe.price;
          let priceNextShoe = nextShoe.price;
    
          // Compare the two vote amounts. 
          // If comparison returns a value ≤ 0, leave a and b in the same order.
          // If comparison returns a value > than 0, sort b before a.
    
          if (priceCurrentShoe < priceNextShoe) return -1;
          if (priceCurrentShoe > priceNextShoe) return 1;
          return 0;
        });
    
        // Use "sortedList" to set array returned from .sort() as value for "paintings" state
        setProducts(sortedList);
      }

      function sortShoesDescending() {
    
        // Use the spread (...) operator to clone the state / prompt React to ackowledge the state change
        let originalList = [...products];
        
        // .sort() "sorts" the elements of an array and returns the sorted array.
        const sortedList = originalList.sort((currentShoe, nextShoe) => {
          let priceCurrentShoe = currentShoe.price;
          let priceNextShoe = nextShoe.price;
    
          // Compare the two vote amounts. 
          // If comparison returns a value ≤ 0, leave a and b in the same order.
          // If comparison returns a value > than 0, sort b before a.
    
          if (priceCurrentShoe > priceNextShoe) return -1;
          if (priceCurrentShoe < priceNextShoe) return 1;
          return 0;
        });
    
        // Use "sortedList" to set array returned from .sort() as value for "paintings" state
        setProducts(sortedList);
      }

  return (
    <div className="App">
      {/* <NavBar cartItems={cartItems} toggleForm={toggleForm} uploadFormView={uploadFormView}/> */}
      <Routes>
        <Route exact path='/'>
          <Home uploadFormView={uploadFormView}/>
        </Route>
        <Route exact path='/marketplace'>
        <NavBar cartItems={cartItems} toggleForm={toggleForm} uploadFormView={uploadFormView}/>
        {uploadFormView ? <ProductForm pushSubmit={pushSubmit}/> : <ProductList onAddToCart={handleAddToCart} products = {products} sortShoesAscending={sortShoesAscending} sortShoesDescending={sortShoesDescending}/> }
        </Route>
        <Route exact path='/cart'>
        <NavBar cartItems={cartItems} toggleForm={toggleForm} uploadFormView={uploadFormView}/>
          <Cart products = {products} onCartAdd ={onCartAdd} onCartRemove={onCartRemove} onCartRemoveAll={onCartRemoveAll} />
        </Route>
      </Routes> 
    </div>
  );
}

export default App; 
