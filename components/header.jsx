import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import UserSettings from "./userSettings";

import logoHorizon from '../public/images/logo_horizontal.png';
import Image from 'next/image';

export default function ButtonAppBar() {
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
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                { /* <React.Fragment key='sidebar'>
                    <Button color="inherit" onClick={toggleDrawer(true)}>Menu</Button>
                    <SwipeableDrawer
                        open={state['sidebar']}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <Button color="inherit" onClick={toggleDrawer(false)}>Close</Button>
                            <UserSettings />
                        </Box>
                    </SwipeableDrawer>
                </React.Fragment> */ }
                {/* <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} align="center"> */}
                <Image src={logoHorizon} width={800} height={100}></Image>
                {/* </Typography> */}
                {/* <Button color="inherit">Logout</Button> */}
            </Toolbar>
        </AppBar>
        </Box>
    );
}
