import React, { useContext } from 'react'
import Orders from '../Components/Orders'
import { Context } from '../ContextProvider'

function Order() {
  const {orders} = useContext( Context )
  const res = orders.map( elemnt => {
    return (<Orders url={elemnt.url} key={elemnt.id}/>)
  })
  return (
    <div>
      <h1>Your Oders</h1>
      {orders.length<1 ? <button className='button'>No Order</button>:''}
      {res}
    </div>
  )
}
export default Order