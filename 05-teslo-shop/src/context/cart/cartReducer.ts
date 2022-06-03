import { setCartInCookies } from "../../helpers";
import { ICartProduct } from "../../interfaces";
import { CartState } from "./CartProvider";

type CartActionType =
    | { type: "Loadcart from cookies | storage", payload: ICartProduct[] }
    | { type: "Add to cart", payload: ICartProduct[] }
    | { type: "UpdateCartQuantity", payload: ICartProduct }
    | { type: "Remove from cart", payload: ICartProduct }
    | {
        type: "Update cart summary",
        payload: {
            numberOfItems: number;
            subTotal: number;
            tax: number;
            total: number;
        }
    };

type reducerType = (state: CartState, action: CartActionType) => CartState;

export const cartReducer: reducerType = (state, action) => {

    switch (action.type) {

        case "Add to cart":
            return {
                ...state,
                cart: [...action.payload]
            }

        case "Loadcart from cookies | storage":
            return {
                ...state,
                cart: action.payload
            }

        case "UpdateCartQuantity":

            const newUpdatedCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    return item
                }
                if (item.size !== action.payload.size) {
                    return item
                }

                return action.payload
            })
            setCartInCookies(newUpdatedCart)
            return {
                ...state,
                cart: newUpdatedCart
            }

        case "Remove from cart":
            const newCart = state.cart.filter(
                item => !(item.id === action.payload.id && item.size === action.payload.size)
            )
            setCartInCookies(newCart)
            return {
                ...state,
                cart: newCart
            }

        case "Update cart summary":
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }

}