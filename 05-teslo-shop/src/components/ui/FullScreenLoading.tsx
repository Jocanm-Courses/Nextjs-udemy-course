import React from 'react'
import * as MU from '@mui/material';

export const FullScreenLoading = () => {
    return (
        <MU.Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 200px)" flexDirection="column">

            <MU.CircularProgress
                thickness={2}
                size={50}
            />
        </MU.Box>
    )
}
