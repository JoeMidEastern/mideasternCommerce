import React, {useState, useEffect} from 'react'
import {Grid, responsiveFontSizes} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'
import {commerce} from '../../lib/commerce'



const Products = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const {data} = await commerce.products.list()
        console.log(data)
        setProducts(data)
    }

    const fetchCart = async () =>{
        const response = await commerce.cart.retrieve()
        setCart(response)
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity)

        setCart(item.cart)
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    const classes = useStyles()
    return (
      
       
        <main className={classes.content}>
            <div className={classes.toolbar}/> 
            <Grid container justify='center' spacing={4}>
            {
                products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                ))
            }
            </Grid>
        </main>

        
    )
}

export default Products
