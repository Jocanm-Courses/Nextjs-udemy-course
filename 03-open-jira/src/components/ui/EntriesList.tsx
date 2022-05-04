import { List, Paper } from '@mui/material';
import React, { FC, useMemo } from 'react';
import { useEntriesContext } from '../../context/entries';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';

interface Props {
    status: EntryStatus
}

export const EntriesList: FC<Props> = ({ status }) => {

    const { entries } = useEntriesContext()

    const filteredEntries = useMemo(()=>{
        return entries.filter(entry => entry.status === status)
    },[entries])

    return (
        <div>
            <Paper sx={{ height: "calc(100vh - 180px)", overflow: "auto", backgroundColor: "transparent", p: "1px 5px" }}>

                <List sx={{ opacity: 1 }}>
                    {
                        filteredEntries.map(entry => (
                            <EntryCard
                                entry={entry}
                                key={entry._id}
                            />
                        ))
                    }
                </List>
            </Paper>

        </div>
    )
}
