import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from "@material-ui/icons"
// import { classes } from 'istanbul-lib-coverage';
import useStyles from './productCardStyles';

function ProductCard({ product, onAddToCart }) {
    const classes = useStyles()

    function handleClick(e) {
        onAddToCart(e, product.id)
    }
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h6">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={handleClick}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard;
