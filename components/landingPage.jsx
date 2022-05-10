// Simple Landing Page component which will contain just enough controls to log in
// This page is used as a fallback when users are not logged

//import Image from 'next/image';
import AuthDialog from 'components/auth/authDialog';
import { useState } from 'react';
//import mainImage from 'public/undraw_positive_attitude_re_wu7d.svg';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';
import IntroImageStepper from './introImageStepper';


export default function LandingPage() {
    const [ isAuthDialogVisible, setAuthDialogVisibility ] = useState(false);
    
    function showAuthDialog() {
        setAuthDialogVisibility(true);
    }

    function hideAuthDialog() {
        setAuthDialogVisibility(false);
    }
    
    return (
        <main>
            { isAuthDialogVisible ? <AuthDialog hideDialog={ hideAuthDialog }/> : '' }
            <IntroImageStepper></IntroImageStepper>
            <Link href="/input" passHref={true} ><Button variant="contained" color="secondary" sx={{m: 2, px: 6, py:2}}><Typography variant="h3">使ってみる</Typography></Button></Link>
        </main>
    );
}