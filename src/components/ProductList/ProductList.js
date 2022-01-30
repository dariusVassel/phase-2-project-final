import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard/ProductCard';
import useStyles from './ProductListStyles'
import { Button, Typography } from '@material-ui/core';

function ProductList({ onAddToCart, products, sortShoesAscending, sortShoesDescending }) {
    const classes = useStyles()
    
    const src = 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2d9af5a0-de12-4fc1-ac5c-43a085a23cb1/react-vision-womens-shoes-kGhsR6.png'
    
    // const productsData = [
    //     { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src, likes: 62355 },
    //     { id: 2, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src, likes: 301298},
    //     { id: 3, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src, likes: 276890  },
    //     { id: 4, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src, likes: 308712  },
    //     { id: 5, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src, likes: 245890  },
    //     { id: 6, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src, likes: 402919  },
    //     { id: 7, name: 'Shoes', description: 'Running Shoes', price: '$130', image: src, likes: 1002980  },
    //     { id: 8, name: 'Sandals', description: 'Birkenstocks', price: '$60', image: src, likes: 81780  },
    // ]
    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:3004/products")
    //       .then(resp => resp.json())
    //       .then(data => {
              
    //         console.log(data)
    //         setProducts(data)
    //       })
    //   }, [])

    function handleSortShoeAscending(){
        sortShoesAscending()
    }

    function handleSortShoeDescending(){
        sortShoesDescending()
    }

    
    const displayProducts = products.map((product) => {
        return (<Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
            <ProductCard product={product} onAddToCart={onAddToCart} src ={src}/>
        </Grid>
        )
    })

    // function sortShoesAscending() {
    
    //     // Use the spread (...) operator to clone the state / prompt React to ackowledge the state change
    //     let originalList = [...products];
        
    //     // .sort() "sorts" the elements of an array and returns the sorted array.
    //     const sortedList = originalList.sort((currentShoe, nextShoe) => {
    //       let priceCurrentShoe = currentShoe.price;
    //       let priceNextShoe = nextShoe.price;
    
    //       // Compare the two vote amounts. 
    //       // If comparison returns a value ≤ 0, leave a and b in the same order.
    //       // If comparison returns a value > than 0, sort b before a.
    
    //       if (priceCurrentShoe < priceNextShoe) return -1;
    //       if (priceCurrentShoe > priceNextShoe) return 1;
    //       return 0;
    //     });
    
    //     // Use "sortedList" to set array returned from .sort() as value for "paintings" state
    //     setProducts(sortedList);
    //   }

    //   function sortShoesDescending() {
    
    //     // Use the spread (...) operator to clone the state / prompt React to ackowledge the state change
    //     let originalList = [...products];
        
    //     // .sort() "sorts" the elements of an array and returns the sorted array.
    //     const sortedList = originalList.sort((currentShoe, nextShoe) => {
    //       let priceCurrentShoe = currentShoe.price;
    //       let priceNextShoe = nextShoe.price;
    
    //       // Compare the two vote amounts. 
    //       // If comparison returns a value ≤ 0, leave a and b in the same order.
    //       // If comparison returns a value > than 0, sort b before a.
    
    //       if (priceCurrentShoe > priceNextShoe) return -1;
    //       if (priceCurrentShoe < priceNextShoe) return 1;
    //       return 0;
    //     });
    
    //     // Use "sortedList" to set array returned from .sort() as value for "paintings" state
    //     setProducts(sortedList);
    //   }

    
    return (
        <div >
            <div className={classes.content}>

            <div className={classes.toolbar} /> 
            <div className={classes.filter}>
                <Typography>
                    <strong>  </strong>
                </Typography>

                <Button variant="outlined" color ="default" size="small"   onClick={handleSortShoeDescending}>
                                Low to High (Price)
                </Button>
                <Button variant="outlined" color ="default" size="small" onClick={handleSortShoeAscending} >
                High to Low (Price)
                </Button>
            </div>


            <Grid container justifyContent="center" spacing={5}>
                {displayProducts}
            </Grid>
            </div>

        </div>
    )
}

export default ProductList;