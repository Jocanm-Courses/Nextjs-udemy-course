import { ICartProduct } from "../../interfaces";
import { CartState } from "./CartProvider";

type CartActionType =
    { type: "Loadcart from cookies | storage", payload?: ICartProduct[] } |
    { type: "Add to cart", payload: ICartProduct }

type reducerType = (state: CartState, action: CartActionType) => CartState;

export const cartReducer: reducerType = (state, action) => {

    switch (action.type) {

        default:
            return state;
    }

}