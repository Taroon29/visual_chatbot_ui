const headerStyles = (theme) => ({
    headerContainer: {
        backgroundColor: 'white!important',
        boxShadow: 'none!important',
        padding: '10px 0px!important',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '5%!important',
            width: '90%!important',
            height: '2px',
            background: 'linear-gradient(90deg, #F0EAFB 0%, #D5E2F8 100%)',
        },
    },
    workspaceButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px!important',
        borderRadius: '5px',
        border: '1px solid #1B2A52',
        padding: '10px 20px!important',
        cursor: 'pointer',
        display:'none'
    },
    workspaceText: {
        margin: '0px 6px!important',
        fontWeight: 500,
        color: '#1E293B',
    },
    notificationIcon: {
        color: '#6E44FF!important',
        marginRight: '30px!important',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px!important',
        borderRadius: '0px!important',
        cursor: 'pointer',
        fontSize:'15px!important',
        padding:'14px!important'
    },
    upgradeButton: {
        background: 'linear-gradient(96deg, #EE72DD -9.5%, #058FFE 120.46%)',
        color: 'white',
        borderRadius: '5px!important',
        padding: '10px 20px!important',
        textTransform: 'none!important',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)!important',
        '& span': {
            color: '#FFF',
            fontSize: '12px!important',
            marginLeft: '10px!important',
            fontWeight: 500,
        },
    },
});

export default headerStyles;
