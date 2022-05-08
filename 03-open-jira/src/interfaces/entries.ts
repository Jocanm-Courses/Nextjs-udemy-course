export interface Entry{
    id: string;
    description: string;
    createdAt: string;
    status: EntryStatus;
}

export type EntryStatus = 'pending' | 'inProgress' | 'finished';