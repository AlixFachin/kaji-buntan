import { useState, useRef, useContext } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from 'styles/login.module.css'
import { AuthContext } from 'src/authContext';

// Material UI
import { Button, TextField, Box, Typography, List, ListItem } from '@mui/material';
import { css } from '@emotion/react';

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

    const marginBottom = css`
        margin-bottom: 2em;`;

    return (
        <div className={ styles.wrapper }>
            <Box className={ styles.dialogWrapper } mb={4}>
                <Typography variant='h4' css={marginBottom}>Register a new user</Typography>
                { errorMsg !== '' ? <div className={ styles.formError }>errorMsg</div> : '' } 
                
                <TextField css={marginBottom} label="E-mail" required id="email" name="email" ref={ newEmailInput }/>
                <TextField css={marginBottom} label="Password" required id="pwd" type="password" ref={ newPwdInput }/>
                
                <div className={ styles.buttonRow + ' ' + marginBottom }>
                    <Button variant='contained' color='secondary' onClick={ hideDialog }>Cancel</Button>
                    <Button variant='contained' color='secondary' onClick={ validateNewUser }>Submit</Button>
                </div>                        
                <div>Already registered? <Button onClick={ showLogin }>Log In</Button></div>                    
            </Box>
        </div>
    );

}