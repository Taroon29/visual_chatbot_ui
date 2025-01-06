const sidebarStyles = {
  root: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#1e2640',
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
