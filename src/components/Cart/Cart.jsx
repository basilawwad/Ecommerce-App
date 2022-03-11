import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import Styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
  if (!cart.line_items) return 'Loading....';

  console.log(cart.line_items);

  const EmptyCard = () => {
    return (
      <Typography variant='subtitle1'>
        Your Cart is Empty,<Link to='/'> Go back to add some</Link>
      </Typography>
    );
  };

  const FilledCard = () => {
    return (
      <section>
        <Grid className={Styles.cardDetails}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item} />
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
              color='primary'
              component={Link}
              to='/checkout'>
              Finish Payment
            </Button>
          </section>
        </div>
      </section>
    );
  };

  return (
    <Container>
      <Typography className={Styles.title} variant='h3' gutterBottom>
        Your Shopping Cart
      </Typography>
      {cart.line_items.length == 0 ? <EmptyCard /> : <FilledCard />}
    </Container>
  );
};

export default Cart;
