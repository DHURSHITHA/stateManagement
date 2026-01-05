// import React, { useState } from 'react'
// import NavBar from './components/NavBar';
// import ProductList from './components/ProductList';
// import CartSummary from './components/CartSummary';

// function App() {
//   //create a state
//   const[cart,setCart]=useState([]);
//   return (
//     <div className="App">
//       <NavBar cartCount={cart.length}/>
//       <ProductList cart={cart} setCart={setCart}/>
//       <CartSummary cart={cart}/>

//     </div>
//   )
// }

// export default App
import React from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <NavBar />
      <ProductList />
      <CartSummary />
    </CartProvider>
  );
}

export default App;
