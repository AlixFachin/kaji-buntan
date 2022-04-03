import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../firebase/clientApp';
import React, { useEffect, useState } from 'react';
import LandingPage from '../components/landingPage';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    const logOut = async () => {
        firebaseAuth.signOut();
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, setUser);

        // useEffect should return a handler which will be called after component unmount
        // we return the unsubscribe function which has been given to us by Firebase
        return () => unsubscribe();

    }, []);

    // Auth protection -> If no user are logged, we fall back to the landing page
    if (!user) {
        return  (
        <AuthContext.Provider value={{ user, firebaseAuth, logOut }}>
            <LandingPage />
        </AuthContext.Provider>);
    }

    return (
        <AuthContext.Provider value={{ user, firebaseAuth, logOut }}>
            { children }
        </AuthContext.Provider>
    );

};