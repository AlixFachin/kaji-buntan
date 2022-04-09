import styles from 'styles/band.module.css'
import Link from 'next/link';

export default function AppFooter() {
    return (<footer className={styles.band}>
        <Link href="/" passHref={true}><button>Home</button></Link>
        <Link href="/record" passHref={true}><button>Record New Activity</button></Link>
        <Link href="/input" passHref={true}><button>Input Routine</button></Link>
        <Link href="/report" passHref={true}><button>View Report</button></Link>
        <button>User Settings</button>
    </footer>);

}