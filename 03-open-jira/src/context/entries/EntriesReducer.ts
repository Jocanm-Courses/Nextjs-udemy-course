import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";

type EntriesAction =
    | { type: "ADD-ENTRY", payload: Entry }
    | { type: "ENTRY-UPDATE", payload: Entry };


export const entriesReducer = (state: EntriesState, { payload, type }: EntriesAction): EntriesState => {

    switch (type) {

        case 'ADD-ENTRY':
            return {
                ...state,
                entries: [...state.entries, payload]
            }

        case 'ENTRY-UPDATE':
            return {
                ...state,
                entries: state.entries.map(entry => (
                    entry._id === payload._id
                        ? payload
                        : entry
                ))
            }

        default:
            return state;
    }

}