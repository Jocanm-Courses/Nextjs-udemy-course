import { createContext, useContext } from 'react';

interface ContextProps {
    sideOpen: boolean;
    openSide: () => void;
    closeSide: () => void;
}

export const UiContext = createContext({} as ContextProps);

export const useUiContext = () => {
    return useContext(UiContext);
}