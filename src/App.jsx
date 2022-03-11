import React, { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();

    setCart(response);
  };

  const handleAddToCart = async (productId, quantity) => {
    const selectedItem = await commerce.cart.add(productId, quantity);
    fetchCart();
  };

  const removeFromCart = (productId) => {
    commerce.cart.remove(productId).then(fetchCart());
  };

  const editCart = (productId, quantity) => {
    commerce.cart.update(productId, quantity).then(fetchCart());
  };

  const emptyCart = () => {
    commerce.cart.empty().then(fetchCart());
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            exact
            path='/'
            element={<Products products1={products} handleAddToCart={handleAddToCart} />}></Route>
          <Route path='/Cart' element={<Cart cart={cart} />}></Route>
          <Route path='/Checkout' element={<Checkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
