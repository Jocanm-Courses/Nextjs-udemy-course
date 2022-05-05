import { createContext, useContext } from 'react';

interface ContextProps {
    sideOpen: boolean;
    isAdding: boolean;
    isDragging: boolean;
    openSide: () => void;
    closeSide: () => void;
    setIsAdding: (isAdding: boolean) => void;
    setIsDragging: (isDragging: boolean) => void;
}

export const UiContext = createContext({} as ContextProps);

export const useUiContext = () => {
    return useContext(UiContext);
}