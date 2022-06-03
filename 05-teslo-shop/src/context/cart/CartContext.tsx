import React from 'react';
import { ICartProduct } from '../../interfaces';


interface ContextProps {
    cart: ICartProduct[]
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;
    
    addToCart: (product: ICartProduct) => void
    updateCartQuantity: (product: ICartProduct) => void
    removeFromCart: (product: ICartProduct) => void
}

export const CartContext = React.createContext<ContextProps>({} as ContextProps);

export const useCartContext = () => React.useContext(CartContext);