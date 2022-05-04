import SaveIcon from '@mui/icons-material/SaveOutlined'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'; import { Button, Box, TextField } from '@mui/material';
import React, { useState } from 'react'

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false)

    const [inputValue, setInputValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const toggleAdding = () => {
        setIsAdding(!isAdding)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onSave = () => {
        if(!inputValue.length) return;
        console.log(inputValue)
    }

    return (
        <Box
            sx={{ mb: 2, px: 1 }}
        >

            {
                !isAdding ?
                    (
                        <Button
                            startIcon={<AddIcon />}
                            fullWidth
                            variant="outlined"
                            onClick={toggleAdding}
                        >
                            Agregar Tarea
                        </Button>
                    ) :
                    <>
                        <TextField
                            fullWidth
                            autoFocus
                            multiline
                            helperText={(inputValue.length === 0 && isTouched) && "Ingrese un valor"}
                            onBlur={() => setIsTouched(true)}
                            error={inputValue.length === 0 && isTouched}
                            value={inputValue}
                            onChange={handleInputChange}
                            sx={{ mt: 2, mb: 1 }}
                            placeholder="Nueva entrada"
                            label="Nueva entrada"
                        />
                        <Box display="flex" justifyContent="space-between">

                            <Button
                                variant='text'
                                onClick={toggleAdding}
                            >
                                CANCELAR
                            </Button>
                            <Button
                                onClick={onSave}
                                variant='outlined'
                                color="secondary"
                                endIcon={<SaveIcon />}
                            >
                                GUARDAR
                            </Button>
                        </Box>
                    </>
            }
        </Box>
    )
}
