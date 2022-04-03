// Simple Landing Page component which will contain just enough controls to log in
// This page is used as a fallback when users are not logged

import Image from 'next/image';
import AuthDialog from './auth/authDialog';
import { useState } from 'react';
import mainImage from '../public/undraw_positive_attitude_re_wu7d.svg';


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
                <h1>家事分担アプリ</h1>
                <Image src={mainImage} alt="couple discussing"  />
                <p> Please log in or register with the link below! </p>
                <button onClick={ showAuthDialog }>Login</button>
        </main>
    );
}