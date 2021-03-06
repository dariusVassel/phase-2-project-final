import React from 'react'
import { Container, Button, Grid, Typography } from '@material-ui/core'
import useStyles from './CartStyles'
import CartCard from './CartCard/CartCard'
import { NavLink } from 'react-router-dom'

function Cart({ onAddToCart, products, onCartAdd, onCartRemove, onCartRemoveAll }) {
    const classes = useStyles()

    
    // const src = 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2d9af5a0-de12-4fc1-ac5c-43a085a23cb1/react-vision-womens-shoes-kGhsR6.png'

    // const products = [
    //     { id: 1, name: 'Shoes', description: 'Running Shoes', price: 130, image: src, quantity: 1 },
    //     { id: 2, name: 'Sandals', description: 'Birkenstocks', price: 60, image: src, quantity: 0 },
    //     { id: 3, name: 'Shoes', description: 'Running Shoes', price: 130, image: src, quantity: 1 },
    //     { id: 4, name: 'Sandals', description: 'Birkenstocks', price: 60, image: src, quantity: 0 },
    //     { id: 5, name: 'Shoes', description: 'Running Shoes', price: 130, image: src, quantity: 0 },
    //     { id: 6, name: 'Sandals', description: 'Birkenstocks', price: 60, image: src, quantity: 0 },
    //     { id: 7, name: 'Shoes', description: 'Running Shoes', price: 130, image: src, quantity: 0 },
    //     { id: 8, name: 'Sandals', description: 'Birkenstocks', price: 60, image: src, quantity: 0 },
    // ]

    const cartProducts = products.filter(product => product.quantity >= 1);

    

    // const [cart, setCart] = useState(cartProducts)


    const displayCartProducts = cartProducts.map((product) => {
        return (<Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
            <CartCard product={product} onAddToCart={onAddToCart} onCartAdd={onCartAdd} onCartRemove={onCartRemove} onCartRemoveAll={onCartRemoveAll}/>
        </Grid>
        )
    })

    const Empty = () => {
        return (
            <Typography variant="overline">
                - Basket Is Empty -
                <br/><br/>
                <Button variant="contained" color ="default" size="small"  component={NavLink} to="/marketplace">
                    Continue Shopping
                </Button>
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
                    {/* <Typography variant="h4">
                        Subtotal: 5900$
                    </Typography> */}
                    <div>
                        {/* <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button> */}
                        <Button className={classes.checkOutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Container>
            {/* <div className={classes.toolbar} /> */}
            <Typography className={classes.title} variant="h5" gutterBottom>
                <strong>
                    Shopping Basket
                </strong>
                </Typography>
                <br/>
                <br/>
            {!cartProducts ? <Empty /> : <Filled />}
        </Container>
    )
}

export default Cart;
