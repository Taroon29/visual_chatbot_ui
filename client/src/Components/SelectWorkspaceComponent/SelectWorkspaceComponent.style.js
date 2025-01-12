
const selectWorkspaceComponentStyles = {
    container: {
        padding: "40px 52px",
    },
    title: {
        position: 'relative',
        marginBottom: "20px!important",
        fontWeight: 600,
        color: '#1B2A52!important',
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 106,
            left: '0%!important',
            right: '0px',
            margin: 'auto',
            width: '100%!important',
            height: '2px',
            background: 'linear-gradient(90deg, #CE76E2 0%, #3B89F7 100%)',
        },
    },
    subtitleContainer: {
        display: 'flex!important',
        justifyContent: 'space-between!important'
    },
    subtitle: {
        color: '#9C91C9!important',
        fontSize: '20px!important',

    },

    workspaceButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px!important',
        borderRadius: '5px',
        border: '1px solid #1B2A52',
        padding: '8px 18px!important',
        cursor: 'pointer',
        background:'#1B2A52!important',
        color:'#FFF!important',
        fontSize: '18px!important',
    },
    workspaceText: {
        fontSize: '16px!important',
        margin: '0px 6px!important',
        fontWeight: 500,
        color: '#FFF',
    },
    tabContainer: {
        display: "flex",
        gap: "12px",
        marginTop: "40px",
        marginBottom: "24px",
    },
    tabButton: {
        color: '#1B2A52!important',
        textTransform: "none!important",
        textAlign: 'center!important',
        border: 'none!important',
        fontSize: '12px!important',
        padding: "8px 16px",
        borderRadius: '5px!important',
        background: 'rgba(41, 55, 81, 0.10)!important',
        gap:10,
        "&.active": {
            backgroundColor: '#1B2A52!important',
            color: '#FFF!important',
            border: 'none!important',
        },
    },
    folderContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
    },
    folderCard: {
        position: 'relative',
        width: "200px",
        minheight: "200px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "#fff",
        textAlign: "center",
        '& svg': {
            position: 'absolute',
            top: '10px',
        }
    },
    folderCardInner: {
        position: 'absolute',
        top: '70px',
        left: '-1px',
        right: 0,
        margin: 'auto',
        width: '200px!important',
        maxheight: '140px!important',
        borderRadius: '10px',
        background: '#FBFBFB',
        boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.05)',
    },
    folderIcon: {
        display: 'flex',

        marginLeft: "22px!important",
        '& svg': {
            marginTop: '10px!important',
        }
    },
    folderTitle: {
        fontSize: "13px!important",
        fontWeight: '500!important',
        lineHeight: '1.3!important',
        marginTop: '20px!important',
        marginLeft: "22px!important",
        textAlign: 'left',
        width: '125px',
    },
    fileCount: {
        fontSize: "12px!important",
        fontWeight: '500!important',
        color: "#60687D!important",
        marginLeft: "44px!important",
        textAlign: 'left',
    },
    lastModified: {
        position: 'relative',
        fontSize: "10px!important",
        color: "#60687D",
        fontWeight: '500!important',
        margin: " 14px 24px!important",
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '5px!important',
        border: '1px solid #DFE3EA!important',
        background: '#FFF!important',
        textAlign: 'center!important',
        alignItems: 'center!important',
        '& span': {
            padding: '7px',
        }


    },
    deleteButtondivider: {
        borderLeft: '1px solid #DFE3EA !important',
        width: '22px',
        height: '33px',
    },
    deleteButton: {
        textAlign: 'center!important',
        '& svg': {
            top: '10px',
            right: '10px',
        }
    },
};

export default selectWorkspaceComponentStyles;
