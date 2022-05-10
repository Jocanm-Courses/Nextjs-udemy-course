import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import { Button, capitalize, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, TextField } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import React, { useMemo, useState } from 'react';
import { Layout } from '../../components/layouts';
import { useEntriesContext } from '../../context/entries';
import { getEntrybYId } from '../../database';
import { EntryStatus } from '../../interfaces';
import { Entry } from '../../interfaces/entries';
import { getTimeSinceNow } from '../../utils';

const validStatus: EntryStatus[] = ["completed", "inProgress", "pending"]

interface Props {
    id: string
    entry: Entry
}

const EntryPage: NextPage<Props> = ({ entry }) => {

    const { updateEntry } = useEntriesContext()

    const [inputValue, setInputValue] = useState(entry.description)
    const [status, setStatus] = useState<EntryStatus>(entry.status)
    const [touched, setTouched] = useState(false)

    const isNotValid = useMemo(() => {
        return inputValue.length === 0 && touched
    }, [inputValue, touched])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onStatusChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value as EntryStatus)
    }

    const onSaved = () => {
        if(inputValue.trim().length === 0) return

        const updatedEntry: Entry = {
            ...entry,
            description: inputValue,
            status
        }

        updateEntry(updatedEntry, true)
    }

    return (
        <Layout title={inputValue.substring(0, 20) + "..."}>
            <Grid
                container
                justifyContent="center"
                sx={{ mt: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>

                    <Card>
                        <CardHeader
                            title={`Entrada: ${inputValue}`}
                            subheader={`Creada ${getTimeSinceNow(entry.createdAt)}...`}
                        />
                        <CardContent>
                            <TextField
                                sx={{ mt: 2, mb: 2 }}
                                fullWidth
                                placeholder='Nueva entrada'
                                autoFocus
                                multiline
                                label="Nueva entrada"
                                onChange={handleInputChange}
                                value={inputValue}
                                helperText={(isNotValid) && "Ingrese un valor"}
                                onBlur={() => setTouched(true)}
                                error={isNotValid}
                            />

                            <FormControl>
                                <FormLabel>Estado</FormLabel>
                                <RadioGroup
                                    value={status}
                                    onChange={onStatusChanged}
                                    row
                                >
                                    {
                                        validStatus.map(status => (
                                            <FormControlLabel
                                                key={status}
                                                value={status}
                                                control={<Radio />}
                                                label={capitalize(status)}
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>

                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={<SaveIcon />}
                                variant="contained"
                                fullWidth
                                onClick={onSaved}
                                disabled={inputValue.length === 0}
                            >
                                Save
                            </Button>
                        </CardActions>

                    </Card>

                </Grid>
            </Grid>

            <IconButton
                sx={{ position: "fixed", bottom: 30, right: 30, backgroundColor: "red" }}
            >
                <DeleteOutlineOutlinedIcon />
            </IconButton>

        </Layout >
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string }

    const entry = await getEntrybYId(id)

    if (!entry) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            entry
        }
    }
}

export default EntryPage