import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard/ProductCard';
import useStyles from './ProductListStyles'
import { useState } from 'react'

function ProductList({ onAddToCart }) {
    const classes = useStyles()
    // const [products, setProducts] = useState([])
    const src = 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2d9af5a0-de12-4fc1-ac5c-43a085a23cb1/react-vision-womens-shoes-kGhsR6.png'
    const products = [
        { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src },
        { id: 2, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src },
        { id: 3, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src },
        { id: 4, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src },
        { id: 5, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src },
        { id: 6, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src },
        { id: 7, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src },
        { id: 8, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src },
    ]

    fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(json => console.log(json))

    const displayProducts = products.map((product) => {
        return (<Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
            <ProductCard product={product} onAddToCart={onAddToCart} />
        </Grid>
        )
    })

    return (
        <div className={classes.content}>
            <div className={classes.toolbar} /> {/* Spacing to not hide the content */}
            <Grid container justifyContent="center" spacing={5}>
                {displayProducts}
            </Grid>
        </div>
    )
}

export default ProductList;