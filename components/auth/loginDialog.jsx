import { useState, useRef, useContext } from 'react';
import styles from '../../styles/login.module.css'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from '../../context/authContext';

const googleProvider = new GoogleAuthProvider();


export default function LoginDialog({ showRegister, hideDialog }) {
    
    const emailInput = useRef(null);
    const pwdInput = useRef(null);
    const [ errorMsg, setErrorMsg ] = useState('');
    const { firebaseAuth } = useContext(AuthContext);

    const validateLogin = () => {
        // insert some validation
        const userEmail = emailInput.current.value;
        const userPwd = pwdInput.current.value;

        signInWithEmailAndPassword(firebaseAuth, userEmail, userPwd)
            .then( () => {
                hideDialog();
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(`Error ${errorCode} : ${errorMessage} `);
            })

    }

    const openGoogleAuth = () => {
        signInWithPopup(firebaseAuth, googleProvider)
        .then(() => {
            // setErrorMsg('Login success!');
            hideDialog();
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // setErrorMsg(`Error ${errorCode} : ${errorMessage} `);
        })
    }

    return (
        <div className={ styles.wrapper } onClick={ hideDialog }>
            <div className={ styles.dialogWrapper } onClick={ (event) => { event.stopPropagation(); } }>
                <div className={ styles.loginPanel }>
                    <p className={styles.formTitle}>Login for returning User</p>
                    { errorMsg !== '' ? <p className={ styles.formError }> { errorMsg } </p> : '' } 
                    <label> 
                        <p>E-mail</p>
                        <input ref={ emailInput } name="email" type="email" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input ref={ pwdInput } name="pwd" type="password" />
                    </label>
                    <button type="button" onClick={ validateLogin }>Login</button>
                    <button type="button" onClick={ openGoogleAuth }>Login (Google)</button>
                </div>
                <div className={ styles.loginPanel + ' ' + styles.callOutPanel }>
                    <p>New to this place?👋</p>
                    <button onClick={ showRegister }>Register</button>
                </div>

            </div>
        </div>        
    )
};