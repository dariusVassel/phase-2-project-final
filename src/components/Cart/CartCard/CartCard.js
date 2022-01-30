import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import useStyles from './CartCardStyles';

function CartCard({ product }) {
    const classes = useStyles()
    return (
        <div>
            <Card>
                <CardMedia className={classes.media} image={product.image} title={product.name} />
                <CardContent className={classes.cardContent}>
                    <Typography variant='h4'>{product.name}</Typography>
                    <Typography variant='h5'>{product.price}</Typography>
                </CardContent>
                <CardActions className={classes.cartActions}>
                    <div className={classes.buttons}>
                        <Button type='button' size='small'>-</Button>
                        <Typography >  4  </Typography>
                        <Button type='button' size='small'>+</Button>
                    </div>
                    <Button type='button' variant='contained' color='secondary' >Remove</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CartCard;
