import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product'

const products = [
    {id: 1,  name: 'test1', description: 'test1 description of this product', price: '$7643', image:'https://images.unsplash.com/photo-1564730465543-e732e7fc9c10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW5naW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {id: 2,  name: 'test2', description: 'test2 description of this product', price: '$$176', image: 'https://images.unsplash.com/photo-1600377232142-164c095e686e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5naW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }, 
    {id: 1,  name: 'test1', description: 'test1 description of this product', price: '$7643', image: 'https://images.unsplash.com/photo-1520642589361-855efeb16791?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGVuZ2luZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
]

const Products = () => {
    return (
        <Grid container justify='center' spacing={4}>
            {
                products.map((product) => {
                    return <>
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    </>
                })
            }
        </Grid>
    )
}

export default Products
