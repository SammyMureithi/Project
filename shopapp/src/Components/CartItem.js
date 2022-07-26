import React, { useContext } from 'react'
import { Context } from '../ContextProvider'


function CartItem( props ) {
    const {toggleFavourite,removeFromCart,cart,addOrder,buttonText}=useContext(Context)
    const styles = {
       borderRadius:"12px"
    }
    function cartIcon(){
        const isAlreadyCart = cart.some(item => item.id === props.id )
        if ( isAlreadyCart) {
          return <img src='../Image/cart.png' onClick={()=> removeFromCart(props.id)}/>
        }
        else if(!isAlreadyCart ){
          return <img src='../Image/cart2.png'/>
        }
      }
      function favIcon() {
        if (props.isFavourite ) {
          return  <img src='../Image/h2.png' onClick={() =>toggleFavourite(props.id)}/>
        }
        else if(!props.isFavourite){
          return  <img src='../Image/h1.png' onClick={() => toggleFavourite(props.id)}/>
        }
      }
  return (
    <div id='product' >
    <div className="container">
              <img src={props.url} alt="Snow" width="300px" height="300px" style={styles} />
     
              <div className="top-left">
                  {favIcon()}
      </div>
              <div className="top-right">
                  {cartIcon()}
              </div>
              
          </div>
          <button className='button' onClick={() => addOrder(props.id)}>
              {buttonText == 0 ? "Buy now" : "Order placed succesfully"}</button>
      </div>
  )
}

export default CartItem