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

    return (
        <UiContext.Provider value={{
            sideOpen: false
        }}>
            {children}
        </UiContext.Provider>
    )
}

