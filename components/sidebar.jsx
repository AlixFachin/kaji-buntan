import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

import UserSettings from "./userSettings";

export default function SwipeableTemporaryDrawer() {
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
    );
}
