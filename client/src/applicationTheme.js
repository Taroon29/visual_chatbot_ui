import { createTheme } from "@material-ui/core";
import "./fonts/inter/fonts.css";
const applicationTheme = createTheme({
    props: {
        MuiButtonBase: {
            disableRipple: true // No more ripple, on the whole application!
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: 'interregular',
    },
    palette: {
        primary: {
            main: "#0460a9",
            light: "#e3e3e3",
            black: '#000',
            white: '#fff',
            green: '#38CB89',
        },
        secondary: {
            main: "#0B61A9"
        }
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: "#fff",
                    color: '#000',
                    overflow: 'hidden',
                    padding: 0,
                    margin: 0,
                    fontFamily: 'interregular',
                    flex: 1,
                    scrollBehavior: 'smooth',
                    height: '100vh',
                    '-webkit-touch-callout': 'none',
                    '-webkit-user-select': 'none',
                    '-khtml-user-select': 'none',
                    '-moz-user-select': 'none',
                    '-ms-user-select': 'none',
                    'user-select': 'none',
                    
                    '& .rc-time-picker-panel': {
                        zIndex: 10000,
                    },
                    '& .rc-time-picker': {
                        width: '100%',
                    },
                    '& .rc-time-picker-input[disabled]': {
                        backgroundColor:'#e8e8e8',
                    },
                },
                '*': {
                    'scrollbar-width': 'thin',
                },
                '*::-webkit-scrollbar': {
                    width: '7px',
                    height: '7px',
                },
                '*::-webkit-scrollbar-thumb': {
                    // backgroundColor: '#e3e3e3',
                    backgroundColor: 'rgba(0,0,0,.1)',
                }
            },
        },
    },

});
export default applicationTheme