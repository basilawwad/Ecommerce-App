import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import Styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <AppBar position='fixed' className={Styles.appBar} color='inherit'>
      <Toolbar className={Styles.toolBar}>
        <Typography variant='h6' className={Styles.title} color='inherit'>
          {/* <img src={} alt='commerceApp' height="25px" className={Styles.image} /> */}
          Test App
        </Typography>
        <div className={Styles.grow}></div>
        <div className={Styles.button}>
          <IconButton aria-label='Show cart items' color='inherit'>
            <Badge badgeContent={2} color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
