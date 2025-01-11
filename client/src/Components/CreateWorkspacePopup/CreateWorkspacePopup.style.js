const WorkspacePopupStyles = () => ({
    dialog: {
        "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.9)", // Semi-transparent background
        },
        "& .MuiPaper-root": {
            borderRadius: "16px",
            padding: "10px",
            maxWidth: "450px!important",
        },
    },
    title: {
        marginBottom: "8px",
    },
    titleText: {
        fontWeight: "700",
        fontSize: "18px",
        color: "#333333",
    },
    subtitleText: {
        fontSize: "14px",
        color: "#888888",
        marginTop: "4px",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        padding: "0 20px 16px",
    },
    titleFieldName: {
        fontSize: "15px!important",
    },
    textField: {
        "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            marginBottom: '14px!important'

        },
        "& .MuiInputLabel-root": {
            fontSize: "12px",
            color: "#666666",
        },
        "& .MuiInputBase-input": {
            padding: '10px!important'
        },
    },
    uploadBox: {
        border: "1px dashed #CCCCCC",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        color: "#666666",
        cursor: "pointer",
        marginBottom:'30px',
        position:'relative',
    },
    uploadBoxImg: {
        width: "22px",
        padding: '10px',
        margin: 'auto',
        borderRadius: '6px',
        border: '1px solid#EAECF0',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'
    },
    uploadText: {
        fontWeight: "500",
        fontSize: "14px",
        marginTop: "10px!important",
        '& span': {
            color: "#6941C6!important",
            fontWeight: '600!important',
        }
    },
    uploadSubText: {
        marginTop: "10px!important",
        fontSize: "12px",
        color: "#999999",
        margin: "8px 0 0",
    },
    uploadBoxFile:{
        position:'absolute',
        bottom:'-50px',
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "16px",
    },
    cancelButton: {
        padding: '10px 24px!important',
        color: "#414651!important",
        border: "1px solid #D5D7DA!important",
        borderRadius: "8px!important",
        textTransform: "none!important",
        fontSize: "14px!important",
        background: '#FFF!important',
        boxShadow: '0px 1px 2px 0px rgba(10, 13, 18, 0.05)!important',
        marginRight:'20px!important',
    },
    confirmButton: {
        padding: '10px 24px!important',
        background: "linear-gradient(97deg, #D475E1 0%, #318AF8 96.24%)!important",
        color: "#FFFFFF!important",
        borderRadius: "8px!important",
        textTransform: "none!important",
        fontSize: "14px!important",
        "&:hover": {
            backgroundColor: "#5400D6",
        },
        boxShadow: '0px 1px 2px 0px rgba(10, 13, 18, 0.05)!important'
    },
});

export default WorkspacePopupStyles;
