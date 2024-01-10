import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'

function Products({user}) {
    const[last10pProducts, setLast10Products]= useState([])
  useEffect(() =>{
    fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then (res=>setLast10Products(res))

      })    
  
      return (
        <>
    
    <h2>Ürünler</h2>
    <div className= 'row row-cols-sm-3 row-cols-md-4'>
    {last10pProducts.map(product =><ProductCard use={user} key= {product.id} item={product} />)}
   </div>
    

      
    </>
  )
}

export default Products
