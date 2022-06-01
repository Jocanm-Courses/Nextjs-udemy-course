import React from 'react';
import { ICartProduct } from '../../interfaces';


interface ContextProps {
    cart: ICartProduct[]
}

export const CartContext = React.createContext<ContextProps>({} as ContextProps);

export const useCartContext = () => React.useContext(CartContext);