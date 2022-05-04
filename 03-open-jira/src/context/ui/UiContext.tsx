import { createContext, useContext } from 'react';

interface ContextProps {
    sideOpen: boolean;
}

export const UiContext = createContext({} as ContextProps);

export const useUiContext = () => {
    return useContext(UiContext);
}