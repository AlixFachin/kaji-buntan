import { useState, useContext } from 'react';

import styles from '../styles/authStatus.module.css';

import { AuthContext } from '../context/authContext';
import AuthDialog from './auth/authDialog';

export default function AuthStatus( ) {
    const [ isAuthDialogVisible, setAuthDialogVisibility ] = useState(false);
    const [ statusMessage, setStatusMessage ] = useState('');
    const { user, logout } = useContext(AuthContext);

    function showAuthDialog() {
        setAuthDialogVisibility(true);
    }

    function hideAuthDialog() {
        setAuthDialogVisibility(false);
    }

    let buttonContent;
    if (user) {
        buttonContent = (<><p>👋 { user.email }</p><div><button type="button" onClick={ logout }>Logout</button></div> </>);
    } else {
        buttonContent = (<><p>🚫</p><button onClick={ showAuthDialog }> Login </button> </>);
    }

    return (
        <div>
            { statusMessage !== '' ? <div> { statusMessage } </div> : '' }
            <div className={ styles.authComponent }>{ buttonContent } </div>
            { isAuthDialogVisible ? <AuthDialog hideDialog={ hideAuthDialog } />  : '' }
        </div>
    );
}