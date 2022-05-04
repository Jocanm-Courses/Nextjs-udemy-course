import { UiState } from './';


type UiAction =
    | { type: "OPEN-SIDEBAR" }
    | { type: "CLOSE-SIDEBAR" }

export const uiReducer = (state: UiState, { type }: UiAction): UiState => {


    switch (type) {

        case "CLOSE-SIDEBAR":
            return { ...state, sideOpen: false };

        case "OPEN-SIDEBAR":
            return { ...state, sideOpen: true };

        default:
            return state;
    }


}