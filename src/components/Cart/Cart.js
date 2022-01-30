import React, { useState } from 'react'
import { Container, Button, Grid, Typography } from '@material-ui/core'
import useStyles from './CartStyles'
import CartCard from './CartCard/CartCard'
import { NavLink } from 'react-router-dom'

function Cart({ onAddToCart }) {
    const classes = useStyles()

    const [emptyCart, setEmptyCart] = useState()
    const src = 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2d9af5a0-de12-4fc1-ac5c-43a085a23cb1/react-vision-womens-shoes-kGhsR6.png'

    const cartProducts = [
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src },
        { id: 2, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src },
        { id: 3, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src },
        { id: 4, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src },
        { id: 5, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src },
        { id: 6, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src },
        { id: 7, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src },
        { id: 8, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src },
    ]

    const displayCartProducts = cartProducts.map((product) => {
        return (<Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
            <CartCard product={product} onAddToCart={onAddToCart} />
        </Grid>
        )
    })

    const Empty = () => {
        return (
            <Typography variant="subtitle1">
                - Your cart is empty -
                <NavLink to='/marketplace' className={classes.link}>Add items.</NavLink>
            </Typography>
        )
    }

    const Filled = () => {
        return (
            <div>
                <Grid container spacing={3}>
                    {displayCartProducts}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        Subtotal: 5900$
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                        <Button className={classes.checkOutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Container>
            {/* <div className={classes.toolbar} /> */}
            <Typography className={classes.title} variant="h3" gutterBottom>Shopping Cart</Typography>
            {emptyCart ? <Empty /> : <Filled />}
        </Container>
    )
}

export default Cart;
