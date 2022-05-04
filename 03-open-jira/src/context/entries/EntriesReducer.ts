import { EntriesState } from "./EntriesProvider";

type EntriesAction =
    | { type: "SET_ENTRIES", entries: EntriesState }


export const entriesReducer = (state: EntriesState, { entries, type }: EntriesAction): EntriesState => {

    switch (type) {

        default:
            return state;
    }

}