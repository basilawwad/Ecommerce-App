import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

import styles from './Products.module.css';

const Products = ({ products1, handleAddToCart }) => {
  return (
    <main className={styles.content}>
      <Grid container justifyContent='center' spacing={4}>
        {products1
          ? products1.map((product) => {
              return (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={handleAddToCart} />
                </Grid>
              );
            })
          : 'Loading'}
      </Grid>
    </main>
  );
};

export default Products;
