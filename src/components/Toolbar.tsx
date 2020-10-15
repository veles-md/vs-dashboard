import React from 'react';
import { AppBar, IconButton, Toolbar as MatToolbar } from '@material-ui/core';
import { MenuOutlined } from '@material-ui/icons';


export const Toolbar = () => {
    return <React.Fragment>
        <AppBar position="fixed">
            <MatToolbar>
                <IconButton color="inherit">
                    <MenuOutlined />
                </IconButton>
            </MatToolbar>
        </AppBar>
        <MatToolbar />
    </React.Fragment >
}