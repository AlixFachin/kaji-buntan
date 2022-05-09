import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#9c27b0",
        },
        secondary: {
            main: "#9c27b0",
        },
    },
    typography: {
        h4: {
            backgroundColor: "#9c27b0",
            paddingLeft: '1em',
            paddingRight: '1em',
            borderRadius: '15px',
        }
    }
});

export default theme;
