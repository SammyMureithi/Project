import { borderRadius, style } from '@mui/system'
import React, { useContext, useState } from 'react'
import { Context } from '../ContextProvider'
function Image( {img} ) {
  const { addToCart, removeFromCart,toggleFavourite } = useContext( Context )
  const [hover,setHover]=useState(false)
  const url = img.url
  const { cart } = useContext( Context )
  const style = {
    width: "280px",
    height: "280px",
    borderRadius: "12px"
  }
  function onHover() {
    setHover( prevState => !prevState )
  }
  function cartIcon(){
    const isAlreadyCart = cart.some(item => item.id === img.id )
    if ( isAlreadyCart) {
      return <img src='../Image/cart.png' onClick={()=> removeFromCart(img.id)}/>
    }
    else if(!isAlreadyCart && hover){
      return <img src='../Image/cart2.png' onClick={()=> addToCart(img.id)}/>
    }
  }
  function favIcon() {
    if ( img.isFavourite ) {
      return  <img src='../Image/h2.png' onClick={() => toggleFavourite(img.id)}/>
    }
    else if(!img.isFavourite && hover){
      return  <img src='../Image/h1.png'  onClick={() => toggleFavourite(img.id)}/>
    }
  }
  return (
    <div id='product' >
      <div className="container" onMouseEnter={onHover} onMouseLeave={onHover}>
        <img src={url} alt="Snow" width="250px" height="250px"  style={hover? style: null}/>
       
        <div className="top-left">
         {favIcon()}
        </div>
        <div className="top-right">
        {cartIcon()}
        </div>
        
      </div>
    </div>
  )
}

export default Image