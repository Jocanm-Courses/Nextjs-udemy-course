
import { createContext, useContext } from 'react';
import { Entry } from '../../interfaces';

interface ContextProps {
    entries: Entry[],
    addNewEntry: (description: string) => void
    updateEntry: (entry: Entry, showAlert?: boolean) => void
}

export const EntriesContext = createContext({} as ContextProps);

export const useEntriesContext = () => {
    return useContext(EntriesContext);
}