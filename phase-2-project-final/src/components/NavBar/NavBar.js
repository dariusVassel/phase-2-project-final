import React from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, IconButton, Badge, Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import SortIcon from '@material-ui/icons/Sort'
import Logo from '../../Assets/logo.jpg'
import useStyles from './NavBarStyles';

function NavBar({ cartItems, toggleForm, uploadFormView }) {
  const classes = useStyles()
  
  return (
      <div>
          <AppBar position="fixed" className={classes.AppBar}>
              <Toolbar className = {classes.background}>
                  <Typography component={NavLink} to="/" variant="h6" className={classes.title} color="inherit">
                      <img src={Logo} alt="Fastly" height="40px" className={classes.image} />
                      <strong>Aimé Leon Dore</strong>
                  </Typography>
                  <div className={classes.grow} />
                  {/* <div className={classes.button}>
                      <Typography component={NavLink} to="/marketplace" variant="h6" className={classes.title} color="inherit">
                          <strong>Products</strong>
                      </Typography>
                  </div> */}
                  <div className={classes.grow} />
                  <div className={classes.button}>
                      <Button variant="contained" color ="secondary" size="small" onClick={toggleForm} component={NavLink} to="/marketplace">
                          {uploadFormView ? "Buy Sneakers" : "Sell Sneakers"}
                      </Button>
                      
                      <IconButton component={NavLink} to="/cart" aria-label="Show Cart Items" color="inherit">
                          <Badge badgeContent={cartItems} color="secondary"><ShoppingCart /></Badge>
                      </IconButton>
                      
                      <IconButton className = {classes.icon}>
                          <SortIcon/>
                      </IconButton>
                  </div>

              </Toolbar>
          </AppBar>

          <NavLink to="/marketplace">Marketplace</NavLink>
      </div>
  )
}

export default NavBar;