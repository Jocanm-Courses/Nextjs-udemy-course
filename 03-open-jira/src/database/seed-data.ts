import { EntryStatus } from "../interfaces";

interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
}

export const seedData: SeedData = {
    entries: [
        {
            description: "lorem ipsum dolo uis 1",
        },
        {
            description: "lorem ipsum dolo uis 2",
        },
        {
            description: "lorem ipsum dolo uis 3",
        },
    ]
}