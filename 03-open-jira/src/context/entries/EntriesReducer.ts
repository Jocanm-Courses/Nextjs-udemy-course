import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";

type EntriesAction =
    | { type: "ADD-ENTRY", payload: Entry }
    | { type: "ENTRY-UPDATE", payload: Entry }
    | { type: "INITIAL-LOAD", payload: Entry[] }


export const entriesReducer = (state: EntriesState, { payload, type }: EntriesAction): EntriesState => {

    switch (type) {

        case 'ADD-ENTRY':
            return {
                ...state,
                entries: [payload, ...state.entries]
            }

        case 'ENTRY-UPDATE':
            return {
                ...state,
                entries: state.entries.map(entry => (
                    entry.id === payload.id
                        ? payload
                        : entry
                ))
            }

        case 'INITIAL-LOAD':
            return {
                ...state,
                entries: [...payload]
            }

        default:
            return state;
    }

}