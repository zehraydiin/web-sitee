import React, { useEffect } from 'react'
import { Link,Navigate} from 'react-router-dom'

function Fav({user}) {
  const[favs,setFavs]=useState([])

  useEffect (()=>{
    setFavs(JSON.parse(localStorage.getItem('favs'))??[]);


  },[])
  
    
  return (
    <>
    <h1>Favoriler</h1>
    <ul>
      {
      favs.map((item)=> <li key={item.id}>{item.title}</li>)}
      </ul>

      <div className="list-group">
    {
      favs.map((ıtem) =>
      <Link 
      key={item.id}
      className="list-group-item list-group-item-action"
      to={`/products/product/${item.id}`}
      > 
       {item.title.toUpperCase()}
      </Link>
      )
    }
    </div>
   </>
  )
}

export default Fav
