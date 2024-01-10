import React from 'react'
import {Link} from 'react-router-dom'

function pageNotFOUND() {
  return (

   <>

    <h1>404- Sayfa Bulunamadı </h1>   
    <Link to= '/' className= 'btn btn-info'> Ana Sayfaya Gİtmek İçin Tıklayın </Link>
    
</>

  )

 }


export default pageNotFOUND 