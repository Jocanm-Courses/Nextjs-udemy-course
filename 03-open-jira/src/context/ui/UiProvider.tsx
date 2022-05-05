import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
    sideOpen: boolean;
    isAdding: boolean;
    isDragging: boolean;
}

export interface Props {
    children: React.ReactNode;
}

const Ui_INIT_STATE: UiState = {
    sideOpen: false,
    isAdding: false,
    isDragging: false,
}


export const UiProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, Ui_INIT_STATE);

    const openSide = () => {
        dispatch({ type: 'OPEN-SIDEBAR' });
    }

    const closeSide = () => {
        dispatch({ type: 'CLOSE-SIDEBAR' });
    }

    const setIsAdding = (isAdding: boolean) => {
        dispatch({ type: 'SET-IS-ADDING', payload: isAdding });
    }

    const setIsDragging = (isDragging: boolean) => {
        dispatch({ type: 'SET-IS-DRAGGING', payload: isDragging });
    }

    return (
        <UiContext.Provider value={{
            ...state,

            openSide,
            closeSide,
            setIsAdding,
            setIsDragging,
        }}>
            {children}
        </UiContext.Provider>
    )
}

