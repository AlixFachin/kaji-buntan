import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

import Link from 'next/link';

import styles from '../styles/main.module.css';

export default function Main() {
    
    const { user } = useContext(AuthContext);

    console.dir(user);

    return (
        <main>
            <h1>Welcome { user.displayName }!</h1>
            <div className={styles.buttonPanel}>
                <Link href="/record" passHref={true}><button>Record New Activity</button></Link>
                <button>View Report</button>
                <button>User Settings</button>
            </div>
        </main>
    );

}
