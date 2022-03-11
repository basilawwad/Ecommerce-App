import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import Styles from './Navbar.module.css';

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <AppBar position='sticky' className={Styles.appBar} color='inherit'>
      <Toolbar className={Styles.toolBar}>
        <Typography
          variant='h6'
          type='button'
          className={Styles.title}
          color='inherit'
          component={Link}
          to='/'>
          {/* <img src={} alt='commerceApp' height="25px" className={Styles.image} /> */}
          Test App
        </Typography>
        <div className={Styles.grow}></div>
        {location.pathname == '/' ? (
          <div className={Styles.button}>
            <IconButton aria-label='Show cart items' color='inherit' component={Link} to='/Cart'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        ) : (
          ''
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
