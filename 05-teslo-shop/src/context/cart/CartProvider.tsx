import React, { useEffect, useReducer } from 'react'
import { ICartProduct } from '../../interfaces'
import { CartContext, cartReducer } from './'
import Cookies from 'js-cookie'
import { setCartInCookies } from '../../helpers'

export interface CartState {
    cart: ICartProduct[]
}

const CART_INIT_STATE: CartState = {
    cart: []
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(cartReducer, CART_INIT_STATE)


    useEffect(() => {
        const cart = Cookies.get('cart')
        const payload = JSON.parse(cart || "[]")
        console.log(payload)
        dispatch({ type: 'Loadcart from cookies | storage', payload })
    }, [])

    //Functions

    const addToCart = (product: ICartProduct) => {
        const productIcCart = state.cart.some(p => p.id === product.id)
        if (!productIcCart) {
            dispatch({ type: 'Add to cart', payload: [...state.cart, product] })
            setCartInCookies([...state.cart, product])
            return;
        }

        const productInCartWithSameSize = state.cart.some(p => p.id === product.id && p.size === product.size)
        if (!productInCartWithSameSize) {
            dispatch({ type: 'Add to cart', payload: [...state.cart, product] })
            setCartInCookies([...state.cart, product])
            return 
        }

        //Acumular
        const updatedProducts = state.cart.map(p => {
            if (p.id !== product.id) return p
            if (p.size !== product.size) return p

            return {
                ...p,
                quantity: p.quantity + product.quantity
            }

        })

        dispatch({ type: 'Add to cart', payload: updatedProducts })
        setCartInCookies(updatedProducts)
        return 
    }

    const updateCartQuantity = (product: ICartProduct) => {
        dispatch({ type: 'UpdateCartQuantity', payload: product })
    }

    const value = {
        ...state,
        addToCart,
        updateCartQuantity
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
