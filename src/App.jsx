import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { commerce } from './lib/commerce';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    commerce.products
      .list()
      .then(({ data }) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.log('There was an error fetching the products', error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <Products products1={products} />
    </div>
  );
}

export default App;
