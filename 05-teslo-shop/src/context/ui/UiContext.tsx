import React from 'react'



interface ContextProps {
    isMenuOpen: boolean
    toogleMenu: () => void
}


export const UiContext = React.createContext<ContextProps>({} as ContextProps)


export const useUiContext = () => React.useContext(UiContext)
