import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import Styles from './Cart.module.css';

const Cart = ({ cart }) => {
  if (!cart.line_items) return 'Loading....';

  const isEmpty = cart.line_items.length == 0;

  console.log(cart.line_items);

  const EmptyCard = () => {
    return <Typography variant='subtitle1'>Your Cart is Empty, hurry up and add some</Typography>;
  };

  const FilledCard = () => {
    return (
      <section>
        <Grid>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <div>{item.name}</div>
            </Grid>
          ))}
        </Grid>
        <div className={Styles.cardDetails}>
          <Typography variant='h4'>SubTotal: {cart.subtotal.formatted_with_symbol}</Typography>
          <section>
            <Button
              className={Styles.emptyButton}
              size='large'
              type='button'
              variant='contained'
              color='secondary'>
              Empty Cart{' '}
            </Button>
            <Button
              className={Styles.checkoutButton}
              size='large'
              type='button'
              variant='contained'
              color='primary'>
              Finish Payment
            </Button>
          </section>
        </div>
      </section>
    );
  };

  return (
    <Container>
      <Typography className={Styles.title} variant='h3'>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCard /> : <FilledCard />}
    </Container>
  );
};

export default Cart;
