import { ICartProduct } from "../../interfaces";
import { CartState } from "./CartProvider";

type CartActionType =
    | { type: "Loadcart from cookies | storage", payload: ICartProduct[] }
    | { type: "Add to cart", payload: ICartProduct[] }
    | { type: "UpdateCartQuantity", payload: ICartProduct }

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
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        return item
                    }
                    if(item.size !== action.payload.size){
                        return item
                    }
                    
                    return action.payload
                })
            }

        default:
            return state;
    }

}