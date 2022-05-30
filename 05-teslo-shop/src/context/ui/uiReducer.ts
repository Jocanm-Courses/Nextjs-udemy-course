import { UiState } from './';



type UiActionType =
    { type: 'TOGGLE MENU' }



export const uiReducer = (state: UiState, action: UiActionType): UiState => {
    switch (action.type) {
        case 'TOGGLE MENU':
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }
        default:
            return state;
    }
}