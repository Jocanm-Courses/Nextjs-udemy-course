import React, { useReducer } from 'react'
import { ICartProduct } from '../../interfaces'
import { CartContext, cartReducer } from './'

export interface CartState {
    cart: ICartProduct[]
}

const CART_INIT_STATE: CartState = {
    cart: []
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(cartReducer, CART_INIT_STATE)

    const value = {
        ...state,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
