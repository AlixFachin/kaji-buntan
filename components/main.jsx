import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { css } from '@emotion/react';

import styles from '../styles/main.module.css';
import { Box, List, ListItem } from '@mui/material';

export default function Main() {
    
    const { user } = useContext(AuthContext);
    const menuButton = css`
        width: 100%;
    `;

    return (
        <div className={styles.homeContainer}>
            <h1>Welcome { user.displayName }!</h1>
            <Box>
                <List>
                    <ListItem>
                        <Link href="/record" passHref={true} variant="contained">
                            <Button variant="contained" color="secondary" css={menuButton}>
                                Record New Activity
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/input" passHref={true}>
                        <Button variant="contained" color="secondary" css={menuButton}>
                                Input Routine
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/report" passHref={true}>
                        <Button variant="contained" color="secondary" css={menuButton}>
                                View Report
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                    <Button variant="contained" color="secondary" css={menuButton}>
                            User Settings
                        </Button>
                    </ListItem>
                </List>
            </Box>
            
        </div>
    );
}
