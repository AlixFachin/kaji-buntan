import { useRef } from "react";

import UserSettings from "./userSettings";
import styles from 'styles/sidebar.module.css';

export default function Sidebar() {

    const sidebarRef = useRef();

    function toggleSidebarSize() {
        sidebarRef.current.classList.toggle(styles.expanded);
     }

    return (
        <aside className={ styles.sideBar } ref={ sidebarRef } >
            <div className={ styles.expandIcon } onClick={ toggleSidebarSize }>➡️</div>
            <UserSettings />
        </aside>
    );
}