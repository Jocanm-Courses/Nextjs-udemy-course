import React, { useEffect, useReducer } from 'react'
import { ICartProduct } from '../../interfaces'
import { CartContext, cartReducer } from './'
import Cookies from 'js-cookie'
import { setCartInCookies } from '../../helpers'

export interface CartState {
    cart: ICartProduct[]
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;
}

const CART_INIT_STATE: CartState = {
    cart: [],
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(cartReducer, CART_INIT_STATE)


    useEffect(() => {
        const cart = Cookies.get('cart')
        const payload = JSON.parse(cart || "[]")
        dispatch({ type: 'Loadcart from cookies | storage', payload })
    }, [])

    useEffect(() => {

        const numberOfItems = state.cart.reduce((prev, current) => prev + current.quantity, 0)

        const subTotal = state.cart.reduce((prev, current) => prev + current.quantity * current.price, 0)

        const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE)

        const orderSummary = {
            numberOfItems,
            subTotal,
            tax: subTotal * taxRate,
            total: subTotal * (1 + taxRate),
        }

        dispatch({ type: 'Update cart summary', payload: orderSummary })
    }, [state.cart])

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

    const removeFromCart = (product: ICartProduct) => {
        dispatch({ type: 'Remove from cart', payload: product })
    }

    const value = {
        ...state,
        addToCart,
        updateCartQuantity,
        removeFromCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
