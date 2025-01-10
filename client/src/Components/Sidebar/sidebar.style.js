const sidebarStyles = {
  root: {
    width: '250px',
    height: '100%',
    background: '#1B2A52',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.10)',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
  },
  logo: {
    display: 'flex',
    justifyContent: 'start',
    marginLeft: '10px',
    marginBottom: '30px',
    '& img': {
      width: '120px',
    },
  },

  sidebarSectionTop: {
    backgroundColor: "#1a2b47",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    borderRadius: '10px',
    background: 'rgba(0, 0, 0, 0.30)',
    boxShadow: '0px -1px 0px 0px rgba(0, 0, 0, 0.08) inset, 0px 1px 0px 0px rgba(0, 0, 0, 0.20) inset',
  },
  listItem: {
    width: '90%',
    margin: '10px auto',
    color: "rgba(255, 255, 255, 0.7)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    cursor: "pointer",
    transition: "all 0.3s ease",

    "&:hover": {
      background: 'linear-gradient(98deg, rgba(205, 118, 226, 0.10) 0%, rgba(53, 137, 247, 0.10) 100%)',
      color: "white",
      borderRadius: '6px',
    },


  },
  activeListItem: {
    background: 'linear-gradient(98deg, rgba(205, 118, 226, 0.10) 0%, rgba(53, 137, 247, 0.10) 100%)',
    color: "white",
    width: '90%',
    margin: '10px auto',
    borderRadius: '6px',
  },
  icon: {
    color: "rgba(255, 255, 255, 0.7)",
    transition: "color 0.3s ease",
  },
  activeIcon: {
    color: "white",
  },
  addIcon: {
    color: "rgba(255, 255, 255, 0.7)",
    transition: "color 0.3s ease",
  },

  divider: {
    p: 0,
    margin: '10px 0px',
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid #31477F;',
    borderColor: 'divider',
    backgroundColor: 'background.paper',

  },

  sectionTitle: {
    marginBottom: '10px',
    marginTop: '20px',
    borderRadius: '5px',
    background: '#FFF',
    color: '#1B2A52',
    fontFamily: 'Poppins',
    fontSize: '16px!important',
    fontWeight: '600!important',
    padding: '10px 18px!important'
  },
  menuList: {
    padding: 0,
  },
  menuItem: {
    marginBottom: '6px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '8px 12px!important',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#2d3748',
    },
  },
  menuItemText: {
    marginLeft: '12px',
    fontSize: '12px!important',
    color: '#ffffff',
  },
  disabledText: {
    color: '#4f4f4f',
  },
  menuIcon: {
    color: '#fff',
    fontSize: '20px',
  },
  checkbox: {
    color: '#fff',
    '&.Mui-checked': {
      color: '#fff!important',
    },
    '&.Mui-disabled': {
      color: '#66759E!important',
      borderRadius: '50%!important',
    },
  },

  sectionTitleRecent: {
    marginBottom: '10px',
    marginTop: '20px',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '16px!important',
    padding: '10px 18px!important',
    fontWeight:'400!important',
  },
  sectionTitleViewAll: {
    marginTop: '20px',
    textAlign: 'center',
    fontWeight: '600!important',
    padding: '10px',
    backgroundColor: '#ffffff',
    color: '#1e2640',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  userSection: {
    marginTop: 'auto',
  },
  menuItemspacing:{
  marginLeft:'16px',
  fontSize:'12px!important'
  },
};

export default sidebarStyles;
