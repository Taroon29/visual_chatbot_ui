const sidebarStyles = {
  root: {
    width: '250px',
    height: '100vh',
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
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: "10px 0",
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
    margin: 'auto',
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

  sectionTitle: {
    color: '#b0b0b0',
    marginBottom: '10px',
    marginTop: '20px',
  },
  menuList: {
    padding: 0,
  },
  menuItem: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '8px 12px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#2d3748',
    },
  },
  menuItemText: {
    marginLeft: '12px',
    fontSize: '14px',
    color: '#ffffff',
  },
  disabledText: {
    color: '#4f4f4f',
  },
  menuIcon: {
    color: '#ffffff',
    fontSize: '20px',
  },
  checkbox: {
    color: '#ffffff',
    '&.Mui-checked': {
      color: '#ffffff',
    },
    '&.Mui-disabled': {
      color: '#4f4f4f',
    },
  },
  viewAllButton: {
    marginTop: '20px',
    textAlign: 'center',
    width: '100%',
    padding: '10px',
    backgroundColor: '#ffffff',
    color: '#1e2640',
    fontSize: '14px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  userSection: {
    marginTop: 'auto',
    borderTop: '1px solid #3a3f54',
    paddingTop: '16px',
  },
};

export default sidebarStyles;
