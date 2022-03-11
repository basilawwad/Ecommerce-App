import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { commerce } from './lib/commerce';

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

    console.log(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products1={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
