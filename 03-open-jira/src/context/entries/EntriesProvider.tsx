import { FC, useEffect, useReducer } from 'react';
import { entriesApi } from '../../apis';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
    entries: Entry[]
}

export interface Props {
    children: React.ReactNode;
}

const ENTRIES_INIT_STATE: EntriesState = {
    entries: [

    ]
}


export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INIT_STATE);

    const addNewEntry = async (description: string) => {

        const { data: newEntry } = await entriesApi.post<Entry>('/entries', { description });

        dispatch({ type: 'ADD-ENTRY', payload: newEntry })
    }

    const updateEntry = async (entry: Entry) => {

        const { id, description, status } = entry

        try {
            dispatch({ type: 'ENTRY-UPDATE', payload: entry })
            await entriesApi.put<Entry>(`/entries/${id}`, { status, description });
        } catch (error) {
            console.log(error);
        }
    }

    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries')
        dispatch({ type: 'INITIAL-LOAD', payload: data })
    }

    useEffect(() => {
        refreshEntries()
    }, [])

    return (
        <EntriesContext.Provider value={{
            ...state,

            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

