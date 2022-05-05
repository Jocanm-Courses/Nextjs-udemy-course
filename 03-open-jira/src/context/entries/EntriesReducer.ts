import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";

type EntriesAction =
    | { type: "ADD-ENTRY", payload: Entry }


export const entriesReducer = (state: EntriesState, { payload, type }: EntriesAction): EntriesState => {

    switch (type) {

        case 'ADD-ENTRY':
            return {
                ...state,
                entries: [...state.entries, payload]
            }

        default:
            return state;
    }

}