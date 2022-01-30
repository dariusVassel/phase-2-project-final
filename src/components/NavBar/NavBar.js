import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Search from "../Search"
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
// import FinalLogo from '../Assets/FinalLogo-og.png'
import Logo from '../../Assets/FinalLogo-og.png'
import useStyles from './NavBarStyles';

function NavBar({ cartItems }) {
    const classes = useStyles()
    const location = useLocation()
    return (
        <div>
            <AppBar position="fixed" className={classes.AppBar}>
                <Toolbar>
                    <Typography component={NavLink} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={Logo} alt="Fastly" height="40px" className={classes.image} />
                        <strong>fastly</strong>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <Typography component={NavLink} to="/marketplace" variant="h6" className={classes.title} color="inherit">
                            <strong>Products</strong>
                        </Typography>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton component={NavLink} to="/cart" aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={cartItems} color="secondary"><ShoppingCart /></Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            <NavLink to="/marketplace">Marketplace</NavLink>
            <Search />
        </div>
    )
}

export default NavBar;