import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import logoHorizon from '../public/images/logo_horizontal.png';
import Image from 'next/image';

export default function ButtonAppBar() {

    return (
        <header>
            <Image src={logoHorizon} alt="Application Logo" height={'100px'} width={'588px'} layout='fixed'></Image>
        </header>
        /*<Box>
            <AppBar position="static">
                <Toolbar sx={{backgroundColor: 'white' }}>
                </Toolbar>
            </AppBar>
        </Box>*/
    );
}
