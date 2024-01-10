import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

function Category({user}) {
 
    const {CategoryName}=useParams()
    const[categoryProducts, setCategoryProducts]=useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res=>res.json())
            .then (res=>setCategoryProducts(res))
            .catch(err=>console.log(err))

    },[])

  return (
    <>
  <h1> category : {CategoryName.toUpperCase()} </h1>
  <div className= 'row row-cols-sm-3 row-cols-md-4'>
   {CategoryProducts.map(item=><ProductCard user={user} key= {item.id} item= {item} />)}
   
   </div>

    </>
  
  )
}

export default Category
