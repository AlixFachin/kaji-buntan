
import LoginDialog from "./loginDialog";
import RegisterUserDialog from "./registerUserDialog";

import { useState } from 'react';


function AuthDialog( { hideDialog }) {

    const [ loginOrRegister, setLoginOrRegister ] = useState('login');

    const showRegister = () => {
        setLoginOrRegister('register');
    }
 
    const showLogin = () => {
        setLoginOrRegister('login');
    }

    return (
        <>
            { loginOrRegister === 'login' ? <LoginDialog showRegister={ showRegister } hideDialog={ hideDialog } /> : '' }
            { loginOrRegister === 'register' ? <RegisterUserDialog showLogin={ showLogin } hideDialog={ hideDialog } /> : '' }
        </>
        )
}

export default AuthDialog
