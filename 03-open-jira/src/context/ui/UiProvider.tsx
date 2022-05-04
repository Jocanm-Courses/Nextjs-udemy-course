import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
    sideOpen: boolean;
}

export interface Props {
    children: React.ReactNode;
}

const Ui_INIT_STATE: UiState = {
    sideOpen: false
}


export const UiProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, Ui_INIT_STATE);

    const openSide = () => {
        dispatch({ type: 'OPEN-SIDEBAR' });
    }

    const closeSide = () => {
        dispatch({ type: 'CLOSE-SIDEBAR' });
    }

    return (
        <UiContext.Provider value={{
            ...state,

            openSide,
            closeSide
        }}>
            {children}
        </UiContext.Provider>
    )
}

