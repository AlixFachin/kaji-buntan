import styles from '../../styles/login.module.css'
import { useState, useRef, useContext } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../../context/authContext';

export default function RegisterUserDialog({ showLogin, hideDialog }) {

    const [ errorMsg, setErrorMsg ] = useState('');
    const newEmailInput = useRef(null);
    const newPwdInput = useRef(null);

    const { firebaseAuth } = useContext(AuthContext)

    const validateNewUser = event => {
        
        event.preventDefault();
        
        // need to insert some validation steps (email regexp)
        const newUserEmail = newEmailInput.current.value;
        const newUserPwd = newPwdInput.current.value;

        createUserWithEmailAndPassword(firebaseAuth, newUserEmail, newUserPwd)
            .then( () => {
                // everything goes well - we can hide the form
                hideDialog();
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(`Error ${errorCode} : ${errorMessage} `);
            });
    };  


    return (
        <div className={ styles.wrapper }>
            <div className={ styles.dialogWrapper }>
                <form className={ styles.registerForm } onSubmit={ validateNewUser } >
                    <p className={styles.formTitle}>Register a new user</p>
                    { errorMsg !== '' ? <p className={ styles.formError }>errorMsg</p> : '' } 
                    <label> 
                        <p>E-mail:</p>
                        <input ref={ newEmailInput } name="email" type="email" />
                    </label>
                    <label>
                        <p>Password:</p>
                        <input ref={ newPwdInput } name="pwd" type="password" />
                    </label>
                    <div className={ styles.buttonRow }>
                        <button type="button" onClick={ hideDialog }>Cancel</button>
                        <button type="button" onClick={ validateNewUser }>Submit</button>
                    </div>
                    <p>Already registered? <a className={ styles.flushLink } onClick={ showLogin }>Log In</a></p>
                </form>    
            </div>
        </div>
    );

}