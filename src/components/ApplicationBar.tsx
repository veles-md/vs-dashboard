import React from 'react';
import { AppBar, IconButton, Toolbar as MatToolbar, Typography } from '@material-ui/core';
import { MenuOutlined } from '@material-ui/icons';


export const ApplicationBar = () => {
    return <React.Fragment>
        <AppBar position="fixed">
            <MatToolbar>
                <IconButton color="inherit">
                    <MenuOutlined />
                </IconButton>
                <Typography variant="h6">VELES SERVICES</Typography>
            </MatToolbar>
        </AppBar>
        <MatToolbar />
    </React.Fragment >
}