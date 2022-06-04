import { setCartInCookies } from "../../helpers";
import { ICartProduct, IUser } from "../../interfaces";
import { AuthState } from "./AuthProvider";

type AuthActionType =
    | { type: "Login"; payload: IUser }
    | { type: "Logout" }


type reducerType = (state: AuthState, action: AuthActionType) => AuthState;

export const authReducer: reducerType = (state, action) => {

    switch (action.type) {

        case "Login":
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            };

        case "Logout":
            return {
                ...state,
                user: undefined,
                isLoggedIn: false
            }

        default:
            return state;
    }

}