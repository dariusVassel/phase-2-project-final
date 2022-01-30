import { useState } from 'react'
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, TextField, InputAdornment, Button } from '@material-ui/core';
import useStyles from './ProductFormStyles';
import { AddShoppingCart, FavoriteBorder } from "@material-ui/icons";
import placeholder from "../../Assets/placeholder.jpg"





function ProductForm({pushSubmit}) {
    const classes = useStyles()

    const src = placeholder

    // const Item = styled(Paper)(({ theme }) => ({
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));

    

    // const [name, setName] = useState("")
    // const [imgURL, setImgURL] = useState("")
    // const [price, setPrice] = useState("")
    // const [details, setDetails] = useState("")

    // const [submittedData, setSubmittedData] = useState()

    const [formData, setFormData] = useState({
        name: "",
        image: `${src}`,
        quantity: 0,
        price: "",
        description: "SKU: 100",
        details: "",
        likes : 0
    })

    function handleFormData(e){
        const name = e.target.name
        const value = e.target.value

        setFormData({
            ...formData,
            [name] : value
        })
    }


    // function handleName(e){
    //     console.log(e.target.value)
    //     setName(e.target.value)
    // }

    // function handleImgURL(e){
    //     console.log(e.target.value)
    //     setImgURL(e.target.value)
    // }

    // function handlePrice(e){
    //     console.log(e.target.value)

    //     setPrice(`$${e.target.value}`)
    // }

    // function handleDetails(e){
    //     console.log(e.target.value)
    //     setDetails(e.target.value)
    // }

    function handleSubmit(e){
        e.preventDefault()

        console.log(e.target)

        const formDataSubmit = {
        name: formData.name,
        image: formData.image,
        quantity: 0,
        price: formData.price,
        description: "SKU: 100",
        details: formData.details,
        likes : 0
        }

        const dataArray = formDataSubmit


        console.log(formDataSubmit)

        // setSubmittedData(dataArray)

        pushSubmit(dataArray)


        setFormData({
            name: "",
            image: `${src}`,
            quantity: 0,
            price: "",
            description: "SKU: 100",
            details: "",
            likes : 0
        })
    }


    return (
        <div>
            <br/>
            <br/>
            <br/>
            
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <br/>
                </Grid>
                
                <Grid item xs={6}>
                    <br/>
                    
                    
                    <Typography variant='overline'><strong>Upload Shoe:</strong></Typography>
                    <form onSubmit={handleSubmit}> 
                        <TextField fullWidth variant = "outlined" size ="small"  margin ="dense" label ="Shoe Name" name = "name" onChange={handleFormData} value = {formData.name}/><br/>
                        <TextField fullWidth variant = "outlined" size ="small"  margin = "dense" label ="ImageURL" name = "image" onChange={handleFormData} /><br/>
                            
                        <TextField fullWidth variant = "outlined" size ="small"  margin = "dense" label ="Price (USD)" InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,}} name = "price" onChange={handleFormData} value = {formData.price}/><br/>
                        <TextField fullWidth variant = "outlined" size ="small"  margin = "dense" label ="Description" name = "details" onChange={handleFormData} value = {formData.details}/><br/>
                            
                        {/* <input type="text" placeholder="Shoe Name" onChange={handleFormData} value = {formData.name} name = "name"/><br/> */}
                        {/* <input type="text" placeholder="ImgURL" onChange={handleFormData}  name = "image"/> <br/>
                            <input type="text" placeholder="Price" onChange={handleFormData} value = {formData.price} name = "price"/><br/>
                            <input type="text" placeholder="Description" onChange={handleFormData} details = {formData.details} name = "details"/><br/> */}
                        <br/>
                        {/* <input type="submit" value="Publish Shoe"/> */}
                        <Button color="primary" variant ="contained" onClick = {handleSubmit}>Publish Shoe</Button>
                    </form>
                </Grid> 

                <Grid item xs={1}>
                <br/>
                </Grid>

                <Grid item xs={3}>
                    <Grid item>
                        <div>
                            <Card className={classes.root}>
                                <CardMedia className={classes.media} image={formData.image} title={formData.name} />
                                <CardContent>
                                    <div className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            {formData.name}
                                        </Typography>
                                        <Typography variant="h6">
                                            ${formData.price}
                                        </Typography>
                                    </div>
                                    <Typography variant="overline" color="textSecondary">
                                        {formData.details}
                                    </Typography>
                                </CardContent>

                                <CardActions disableSpacing className={classes.cardActions}>
                                    <FavoriteBorder />  
                                    <IconButton aria-label="Add to Cart" >
                                        <AddShoppingCart />
                                    </IconButton>
                                    <Typography variant="overline" color="textSecondary">
                                    Favorites
                                    </Typography>
                                </CardActions>
                            </Card>      
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductForm;