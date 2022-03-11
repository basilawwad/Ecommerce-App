import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import Styles from './CartItem.module.css';
const CartItem = ({ item }) => {
  console.log(item);
  return (
    <Card>
      <CardMedia image={item.image.url} alt={item.name} className={Styles.media} />
      <CardContent className={Styles.cardContent}>
        <Typography variant='h5'>{item.name}</Typography>
        <Typography variant='h5'>{item.price.formatted_with_code}</Typography>
      </CardContent>
      <CardActions className={Styles.cardActions}>
        <section className={Styles.buttons}>
          <Button type='button' size='small' variant='contained' color='secondary'>
            Remove
          </Button>
          <Button type='button' size='small'>
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type='button' size='small'>
            +
          </Button>
        </section>
      </CardActions>
    </Card>
  );
};

export default CartItem;
