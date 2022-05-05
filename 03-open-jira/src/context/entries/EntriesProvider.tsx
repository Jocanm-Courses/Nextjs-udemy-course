import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid'

export interface EntriesState {
    entries: Entry[]
}

export interface Props {
    children: React.ReactNode;
}

const ENTRIES_INIT_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: "lorem ipsum dolo uis",
            createdAt: (Date.now()).toFixed(),
            status: "pending"
        },
        {
            _id: uuidv4(),
            description: "lorem ipsum dolo uis",
            createdAt: (Date.now() - 1000000).toFixed(),
            status: "finished"
        },
        {
            _id: uuidv4(),
            description: "lorem ipsum dolo uis",
            createdAt: (Date.now() - 100000).toFixed(),
            status: "in-progress"
        },
    ]
}


export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INIT_STATE);

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: (Date.now()).toFixed(),
            status: "pending"
        }

        dispatch({ type: 'ADD-ENTRY', payload: newEntry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,

            addNewEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

