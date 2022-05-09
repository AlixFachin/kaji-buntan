import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#A5559C",
        },
        secondary: {
            main: "#A5559C",
        },
    },
    typography: {
        h4: {
            backgroundColor: "#A5559C",
            paddingLeft: '1em',
            paddingRight: '1em',
            borderRadius: '15px',
        }
    }
});

export default theme;
