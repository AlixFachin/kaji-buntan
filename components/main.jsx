import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

import Link from 'next/link';

import styles from '../styles/main.module.css';

export default function Main() {
    
    const { user } = useContext(AuthContext);

    return (
        <div className={styles.homeContainer}>
            <h1>Welcome { user.displayName }!</h1>
            <div className={styles.buttonPanel}>
                <Link href="/record" passHref={true}><button>Record New Activity</button></Link>
                <Link href="/input" passHref={true}><button>Input Routine</button></Link>
                <Link href="/report" passHref={true}><button>View Report</button></Link>
                <button>User Settings</button>
            </div>
        </div>
    );

}
