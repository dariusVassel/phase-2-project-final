import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import useStyles from './CartCardStyles';

function CartCard({ product, onCartRemove, onCartRemoveAll, onCartAdd }) {
    const classes = useStyles()
    // const src = 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2d9af5a0-de12-4fc1-ac5c-43a085a23cb1/react-vision-womens-shoes-kGhsR6.png'

    function handleRemove(e){
        onCartRemove(e, product.id)
    }

    function handleAdd(e){
        onCartAdd(e, product.id)
    }

    function handleRemoveAll(e){
        onCartRemoveAll(e, product.id)
    }

    return (
        <div>
            <Card>
                <CardMedia className={classes.media} image={product.image} title={product.name} />
                <CardContent className={classes.cardContent}>
                    <Typography variant='subtitle2'>{product.name}</Typography>
                    <Typography variant='subtitle2'>${product.price}</Typography>
                </CardContent>
                <CardActions className={classes.cartActions}>
                    <div className={classes.buttons}>
                        <Button type='button' size='small' onClick={handleRemove}>-</Button>
                        <Typography >  {product.quantity}  </Typography>
                        <Button type='button' size='small' onClick={handleAdd}>+</Button>
                    </div>
                    <Button type='button' variant='contained' color='secondary' onClick={handleRemoveAll}>Remove</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CartCard;
