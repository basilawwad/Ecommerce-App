import React, { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
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
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const removeFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const updateCartQuantity = async (productId, quantity, e) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
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
          <Route
            path='/Cart'
            element={
              <Cart
                cart={cart}
                emptyCart={emptyCart}
                removeFromCart={removeFromCart}
                updateCartQuantity={updateCartQuantity}
              />
            }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
