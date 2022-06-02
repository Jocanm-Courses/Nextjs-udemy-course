import Cookies from 'js-cookie';
import { ICartProduct } from '../interfaces';


export const setCartInCookies = (cart: ICartProduct[]) => {
    Cookies.set('cart', JSON.stringify(cart));
}