import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
  { id: 1, name: 'shoes', description: 'Macbook', price: 5 },
  { id: 2, name: 'shoes', description: 'Watch', price: 15 }
];
const Products = () => {
  return (
    <main>
      <Grid container justifyContent='center' spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
