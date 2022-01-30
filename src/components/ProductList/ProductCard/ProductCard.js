import React from 'react';
import { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart, Favorite, FavoriteBorder } from "@material-ui/icons";
import useStyles from './productCardStyles';


function ProductCard({ product, onAddToCart }) {
    const classes = useStyles()


    function handleClick(e) {
        onAddToCart(e, product.id)
    }


    function handleLike(e){
        setLike(!isLiked)
        !isLiked ? setLikeNumbers(likeNumbers + 1) : setLikeNumbers(likeNumbers - 1)
    }

    const [isLiked, setLike] = useState(false)
    const [likeNumbers, setLikeNumbers] = useState(product.likes)

    return (
        <div>
            <Card className={classes.root}>

                <CardMedia className={classes.media} image={product.image} title={product.name} />
                
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="subtitle1" gutterBottom>
                            <strong>{product.name}</strong>
                        </Typography>
                        <Typography variant="subtitle2">
                            ${product.price}
                        </Typography>
                    </div>
                    <Typography variant="overline" color="textSecondary">
                        {product.description}
                    </Typography>
                </CardContent>

                <CardActions disableSpacing className={classes.cardActions}>
                    {!isLiked ? <FavoriteBorder onClick={handleLike}/> : <Favorite onClick={handleLike}/>} 
                    <IconButton aria-label="Add to Cart" onClick={handleClick}>
                        <AddShoppingCart />
                    </IconButton>
                    <Typography variant="overline" color="textSecondary">
                    {likeNumbers} Favorites
                    </Typography>
                </CardActions>
                
            </Card>
        </div>
    )
}

export default ProductCard;
