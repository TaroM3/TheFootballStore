import { createContext, useState } from "react"

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    //limpia el carrito
    const clearCart = () => {
        setCart([]);
    }

    //agrega producto al carrito
    const addToCart = (productToAdd) => {
        let exist = cart.some((product) => product.id === productToAdd.id)
        if(exist) {
            let newCart = cart.map((product) => {
                if(productToAdd.id === product.id){
                    return {
                        ...product,
                        quantity: productToAdd.quantity
                    }
                }
            })
            setCart(newCart)
        }else{
            setCart(...cart, productToAdd)
        }
    }

    //retorna precio total del carrito
    const getTotalPrice = () => {
        let total = cart.reduce((acc, product) => {
            return acc + (product.price * product.quantity) 
        }, 0)
        return total
    }

    //borra el producto que contenga el id pasado por parametro
    const deleteById = (id) => {
        let newCart = cart.filter((product) => product.id !== id)
        setCart(newCart)
    }

    //retorna el total de cantidad de productos del carrito
    const getTotalQuantity = () => {
        let total = cart.reduce((acc, product) => {
            return acc + product.quantity
        }, 0)
        return total
    }

    //retorna la cantidad del producto que contenga el id pasado por parametro
    const getQuantityById = (id) => {
        let productById = cart.find((product) => product.id === +id)
        return productById?.quantity
    }

    //retorna el precio parcial de un solo producto que contenga el id pasado por parametro
    const getPartialPrice = (id) => {
        let productById = cart.find((product) => product.id === id)
        return (productById.quantity * productById.price)
    }

    let data = {
        cart,
        clearCart,
        getTotalPrice,
        addToCart,
        deleteById,
        getTotalQuantity,
        getQuantityById,
        getPartialPrice
    }
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartContextProvider