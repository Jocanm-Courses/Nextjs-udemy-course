import React from 'react';
import { ICartProduct } from '../../interfaces';


interface ContextProps {
    cart: ICartProduct[]
    addToCart: (product: ICartProduct) => void
    updateCartQuantity: (product: ICartProduct) => void
}

export const CartContext = React.createContext<ContextProps>({} as ContextProps);

export const useCartContext = () => React.useContext(CartContext);