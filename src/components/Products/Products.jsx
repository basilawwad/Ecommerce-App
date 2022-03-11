import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

import styles from './Products.module.css';

const products = [
  { id: 1, name: 'shoes', description: 'Macbook', price: 5 },
  { id: 2, name: 'shoes', description: 'Watch', price: 15 }
];
const Products = ({ products1 }) => {
  return (
    <main className={styles.content}>
      <Grid container justifyContent='center' spacing={4}>
        {products
          ? products1.map((product) => {
              console.log(product);
              return (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} />
                </Grid>
              );
            })
          : 'Loading'}
      </Grid>
    </main>
  );
};

export default Products;
