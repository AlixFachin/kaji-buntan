import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(239, 182, 109)",
        },
        secondary: {
            main: "rgb(107, 25, 64)",
        },
    },
    typography: {
        h4: {
            backgroundColor: "rgb(239, 182, 109)",
            paddingLeft: '1em',
            paddingRight: '1em',
            borderRadius: '15px',
        }
    }
});

export default theme;
