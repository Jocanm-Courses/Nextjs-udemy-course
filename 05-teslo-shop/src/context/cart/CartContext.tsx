import React from 'react';
import { ICartProduct } from '../../interfaces';
import { AdressFormProps } from '../../pages/checkout/address';


interface ContextProps {
    cart: ICartProduct[]
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;
    isLoaded: boolean;

    shippingAddress?: AdressFormProps;
    
    addToCart: (product: ICartProduct) => void
    updateCartQuantity: (product: ICartProduct) => void
    removeFromCart: (product: ICartProduct) => void;
    updateAddress: (address: AdressFormProps) => void;
}

export const CartContext = React.createContext<ContextProps>({} as ContextProps);

export const useCartContext = () => React.useContext(CartContext);