import styles from '../styles/band.module.css'
import Link from 'next/link';

export default function AppFooter() {
    return (<footer className={styles.band}>
        <Link href="/record" passHref={true}><button>Record New Activity</button></Link>
        <button>View Report</button>
        <button>User Settings</button>
    </footer>);

}