import {Context} from '../ContextProvider'
import React, { useContext } from 'react'
import Image from '../Components/Image'

function Home() {
  const {allProducts} = useContext( Context )
  const Products = allProducts.map( (img,i) => {
    return (
   <Image img={img} key={img.id}/>
   )
 })
  return (
    <div>
      <h1>Products</h1>
          {Products}
    </div>
  )
}

export default Home