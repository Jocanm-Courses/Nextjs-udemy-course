import { List, Paper } from '@mui/material';
import React, { FC, useMemo } from 'react';
import { useEntriesContext } from '../../context/entries';
import { useUiContext } from '../../context/ui';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';
import styles from './EntryList.module.css'

interface Props {
    status: EntryStatus
}

export const EntriesList: FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useEntriesContext()
    const { isDragging, setIsDragging } = useUiContext()

    const filteredEntries = useMemo(() => {
        return entries.filter(entry => entry.status === status)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entries])

    const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const onDropEntry = (e: React.DragEvent<HTMLDivElement>) => {
        const id = e.dataTransfer.getData('text/plain')
        const entry = entries.find(entry => entry._id === id)!
        entry.status = status
        updateEntry(entry)
        setIsDragging(false)
    }

    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ""}
        >
            <Paper sx={{ height: "calc(100vh - 180px)", overflow: "auto", backgroundColor: "transparent", p: "1px 5px" }}>

                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
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
