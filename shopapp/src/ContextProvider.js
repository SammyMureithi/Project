import React, { createContext, useEffect, useState } from 'react'

const Context=createContext()
function ContextProvider( props ) {
    const [cart, setCart] = useState( [] )
    const [allProducts, setAllProducts] = useState( [] )
    useEffect( () => {
        fetch( "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json" )
            .then( res => {
                if ( res.ok ) {
                    console.log( "Fetch succesful" )
                }
                else {
                    console.log( "fetch not successful" )
                }
                return res
            } )
            .then( res => res.json() )
            .then( data => setAllProducts( data ) )
        .catch(error => console.log(error))
    }, [] )
    function addToCart( id ) {
        allProducts.map( element => {
            if ( element.id == id ) {
                setCart(oldItems => [...oldItems,element])
            }
        })
        
    }
    function removeFromCart( id ) {
        setCart(prevItem => prevItem.filter(items =>items.id !==id))
    }
    function toggleFavourite( id ) {
        const updatedArray = allProducts.map( element => {
            if ( element.id === id ) {
                return {
                    ...element,
                    isFavourite:!element.isFavourite
                }
            }
            return element
        } )
        setAllProducts(updatedArray)
    }
  return (
      <div>
          <Context.Provider value={{allProducts,addToCart,removeFromCart,cart,toggleFavourite}}>
              {props.children}
          </Context.Provider>
    </div>
  )
}

export  {ContextProvider,Context}