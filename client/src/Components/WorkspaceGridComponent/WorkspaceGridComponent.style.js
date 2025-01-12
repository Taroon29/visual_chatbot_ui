const workspaceGridComponentStyles = {
  gridContainer: {
      backgroundColor: 'white',
      border: '1px solid #ccc',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      width: 'auto',
      height: '210px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '&:hover': {
        backgroundColor: '#f7f7f7',
      },
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    fileNameContainer: {
      flex: 1,
    },
    fileName: {
      fontSize: '12px',
      fontWeight: 'bold',
      maxWidth: '150px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    menuButton: {
      padding: 0,
    },
    previewContainer: {
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70%',
      overflow: 'hidden',
    },
    previewImage: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'top',
    },
    fileSummary: {
      fontSize: '12px',
      color: '#a4a4a4',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '12px',
      fontWeight: 300,
      color: 'black',
    },
    tooltip: {
      fontSize: '12px',
      backgroundColor: 'white',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '8px',
      zIndex: 10,
    },
  };
  
  export default workspaceGridComponentStyles;
  