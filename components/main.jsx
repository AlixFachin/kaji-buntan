import { useContext } from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Box, List, ListItem } from '@mui/material';

import { AuthContext } from 'src/authContext';
import styles from 'styles/main.module.css';

export default function Main() {
    
    const { user } = useContext(AuthContext);

    return (
        <div className={styles.homeContainer}>
            <h1>Welcome { user.displayName }!</h1>
            <Box>
                <List>
                    <ListItem>
                        <Link href="/record" passHref={true} variant="contained">
                            <Button variant="contained" color="secondary">
                                Record New Activity
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/input" passHref={true}>
                        <Button variant="contained" color="secondary">
                                Input Routine
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/report" passHref={true}>
                        <Button variant="contained" color="secondary">
                                View Report
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                    <Button variant="contained" color="secondary">
                            User Settings
                        </Button>
                    </ListItem>
                </List>
            </Box>
            
        </div>
    );
}
