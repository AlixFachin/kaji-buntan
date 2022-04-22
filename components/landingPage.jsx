// Simple Landing Page component which will contain just enough controls to log in
// This page is used as a fallback when users are not logged

import Image from 'next/image';
import AuthDialog from 'components/auth/authDialog';
import { useState } from 'react';
import mainImage from 'public/undraw_positive_attitude_re_wu7d.svg';
import Link from 'next/link';


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
                <p> 平等の家事分担の計算見ましょう！</p>
                <Link href="/input" passHref={true} ><button>次へ</button></Link>
        </main>
    );
}