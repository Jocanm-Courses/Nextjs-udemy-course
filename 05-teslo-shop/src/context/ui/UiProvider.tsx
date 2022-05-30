import React, { useReducer } from 'react'
import { UiContext, uiReducer } from './'

export interface UiState {
    isMenuOpen: boolean
}

const UI_INIT_STATE: UiState = {
    isMenuOpen: false
}

export const UiProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INIT_STATE)

    const toogleMenu = () => dispatch({ type: 'TOGGLE MENU' })

    const value = {
        ...state,
        toogleMenu
    }

    return (
        <UiContext.Provider value={value}>
            {children}
        </UiContext.Provider>
    )
}
