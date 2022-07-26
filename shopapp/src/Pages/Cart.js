import React, { useContext } from 'react'
import CartItem from '../Components/CartItem'
import { Context } from '../ContextProvider'

function Cart() {
  const { cart } = useContext( Context )
  const res = cart.map( elemnt => {
    return ( <CartItem url={elemnt.url} id={elemnt.id} key={elemnt.id} isFavourite={elemnt.isFavourite} />)
  })
  return (
    <div>
      {res}
    </div>
  )
}

export default Cart