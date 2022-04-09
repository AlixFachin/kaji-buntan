import { setDoc, doc } from 'firebase/firestore';
import { useState, useRef, useContext } from 'react';
import styles from 'styles/userSettings.module.css';

import { firebaseStore } from 'firebase/clientApp';
import { AuthContext } from 'src/authContext';

function UserSettings( { currentUser }) {

    const { user, logOut } = useContext(AuthContext);

    const basicProperties = [ 'email', 'displayName', 'phoneNumber' ];

    const [ userNickname, setUserNickname ] = useState('');
    const [ errorMsg, setErrorMsg ] = useState('');

    const nicknameInput = useRef(null);

    // Function to send to FireStore database the value of the current user
    const validateInput = async () => {
        if (!user) {
            return;
        }
        
        try {
            const docRef = await setDoc(doc(firebaseStore, "users", currentUser.uid), {
                nickname: nicknameInput.current.value,
            });
            console.log('Document added successfully in the database!')

        } catch (e) {
            setErrorMsg('Error Adding document:' + e);
        }

    };

    if (user && basicProperties instanceof Array) {
        console.log(basicProperties.map(x => user[x]).join(','));
    }

    if (!user) {
        return <p>No user logged!</p>;
    }

    return (
        <div className={styles.mainPanel}>
            <div className={styles.dataPanel}>
                <p>👋 { user.email }</p>
                <div>
                    <button type="button" onClick={ logOut }>Logout</button>
                </div>
            </div>
            <div className={styles.dataPanel}>
                { basicProperties.map((userProperty, index) => (
                    <div className={styles.dataRow} key={index}>
                        <span>{userProperty}: </span>
                        <span>{ user[userProperty] }</span>
                    </div>
                )) }                
            </div>
            <div className={styles.dataPanel}>
                <form className={ styles.inputForm } >
                    <p className={styles.formTitle}>Some user data</p>
                    { errorMsg !== '' ? <p className={ styles.formError }> { errorMsg } </p> : '' } 
                    <label> 
                        <p>Nickname:</p>
                        <input ref={ nicknameInput } name="nickname"/>
                    </label>
                    <div className={ styles.buttonRow }>
                        <button type="button" onClick={ validateInput }>Submit</button>
                    </div>
                </form>
            </div>
        </div>);
}

export default UserSettings;