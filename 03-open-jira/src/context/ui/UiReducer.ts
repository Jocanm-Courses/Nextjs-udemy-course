import { UiState } from './';


type UiAction =
    | { type: "OPEN-SIDEBAR" }
    | { type: "CLOSE-SIDEBAR" }
    | { type: "SET-IS-ADDING", payload: boolean }
    | { type: "SET-IS-DRAGGING", payload: boolean }

export const uiReducer = (state: UiState, action: UiAction): UiState => {


    switch (action.type) {

        case "CLOSE-SIDEBAR":
            return { ...state, sideOpen: false };

        case "OPEN-SIDEBAR":
            return { ...state, sideOpen: true };

        case "SET-IS-ADDING":
            return { ...state, isAdding: action.payload };
        
        case "SET-IS-DRAGGING":
            return { ...state, isDragging: action.payload };

        default:
            return state;
    }


}