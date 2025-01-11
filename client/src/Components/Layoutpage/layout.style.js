
const layoutStyles = {
    container: {
        margin: '36px',
        padding: '36px',
        textAlign: "center",
        backgroundColor: "#f9f9fc",
        // minHeight: "100vh",
        borderRadius: '10px',
        background: 'linear-gradient(90deg, #F0EAFB 0%, #D5E2F8 100%)',
    },
    heading: {
        color: "#0F023C!important",
        fontFamily: "Poppins",
        fontSize: "44px!important",
        fontStyle: "normal",
        fontWeight: "600!important",
        lineHeight: "normal",
    },
    subheading: {
        color: "#616A96!important",
        fontFamily: "Poppins",
        fontSize: "14px!important",
        fontStyle: "normal",
        fontWeight: '400!important',
        lineHeight: "normal",
        margin: '16px!important',
    },
    searchBox: {
        position: 'relative!important',
        display: "flex",
        justifyContent: "center",
        maxWidth: "800px",
        background: 'transparent',
        borderRadius: '15px!important',
        margin: '16px auto',
        ' & svg': {
            position: 'absolute!important',
            width: '16px',
            top: '16px',
            left: '10px!important',
            zIndex: 1
        },
        '& .css-1blp12k-MuiInputBase-root-MuiOutlinedInput-root': {
            borderRadius: '15px!important',

            '&:hover': {
                backgroundColor: 'transparent!important',
            }
        }
    },
    input: {
        position: 'relative!important',
        maxWidth: "800px",
        marginRight: '16px',
        borderRadius: '15px!important',
        border: '1px solid #A79AE6',
        background: '#FFF'
    },
    sendButton: {
        position: 'absolute!important',
        display: 'flex!important',
        justifyContent: 'space-between',
        right: '16px',
        top: '10px',
        padding: '6px 16px!important',
        backgroundColor: "#B4ABE3!important",
        color: "#fff!important",
        borderRadius: '8px',
        ' & span': {
            marginRight: '6px',
            textTransform: 'lowercase',
        },
        ' & svg': {
            position: 'relative!important',
            width: '16px',
            top: '0px',
            left: '4px!important',
            zIndex: 1

        },
        "&:hover": {
            backgroundColor: "#3700b3",
        },
    },
    chipContainer: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: '8px',
        marginBottom: '32px',
    },
    chip: {
        backgroundColor: "transparent!important",
        color: "#5447A9!important",
        borderRadius: '20px!important',
        border: '1px solid #5447A9!important',
        fontWeight: '500!important',
        '&:hover': {
            backgroundColor: "#FFF!important",
            cursor: 'pointer'
        },
    },
    cardContainer: {
        marginTop: '32px',
        width: '65%!important',
        margin: 'auto!important',
    },
    card: {
        // width: '350px',
minheight: '196px',
        position: 'relative!important',
        border: '1px solid #DDDDE2!important',
        background: '#FFF!important',
        borderRadius: "10px!important",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        "&:hover": {
            transform: "scale(1.05)",
        },
    },
    cardicon: {
        position: 'relative',
        display: 'flex!important',
        justifyContent: 'space-between!important',
        '& img': {
        },
        "& svg": {
            position: 'absolute!important',
            right: '0!important',
        },

    },
    cardTitle: {
        color: '#0F023C',
        fontSize: '18px',
        fontWeight: 600,
    },
    cardDescription: {
        color: "#000",
        fontSize: '11px!important',
        margin:'8px 0px!important'
    },
    "@keyframes backgroundGradient": {
        "0%": {
          background: "linear-gradient(90deg, #F0EAFB 0%, #D5E2F8 100%)",
        },
        "50%": {
          background: "linear-gradient(90deg, #D5E2F8 0%, #F0EAFB 100%)",
        },
        "100%": {
          background: "linear-gradient(90deg, #F0EAFB 0%, #D5E2F8 100%)",
        },
      },
      footer: {
        marginTop: "40px",
        color: "#000",
        fontSize: "16px",
        borderRadius: "10px",
        background: "linear-gradient(90deg, #F0EAFB 0%, #D5E2F8 100%)", // Fallback for browsers without animation support
        padding: "16px",
        textAlign: "center",
        width: "60%",
        margin: "auto",
        animation: "backgroundGradient 2s infinite",
      },
}

export default layoutStyles;
