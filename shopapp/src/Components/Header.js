import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
      <div>
          <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink  to="cart">Cart</NavLink>
              <NavLink  to="order">Orders</NavLink>
          </nav>
    </div>
  )
}

export default Header