import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

import UserSettings from "./userSettings";

import styles from 'styles/band.module.css'

export default function AppHeader() {
    const [state, setState] = React.useState({
        sidebar: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, sidebar: open });
    };

    return (
        <header className={styles.band}>
        <div>
            <React.Fragment key='sidebar'>
                <Button onClick={toggleDrawer(true)}>➡️</Button>
                <SwipeableDrawer
                    open={state['sidebar']}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                    >
                        <Button onClick={toggleDrawer(false)}>⬅</Button>
                        <UserSettings />
                    </Box>
                </SwipeableDrawer>
            </React.Fragment>
        </div>
        <h1>家事分担</h1>
        </header>
    );
}