// DocumentComponent.jsx
import React from 'react';
import {  Box,  Typography, Menu,MenuItem,IconButton,Tooltip,} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';
import workspaceGridComponentStyles from './WorkspaceGridComponent.style';
// import marked from 'marked';
const useStyles = makeStyles(workspaceGridComponentStyles);
const WorkspaceGridComponent = ({
  file_name,
  file_summary,
  blob_url,
  date,
  time,
  handlesummary,
  handleDelete,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
    className={classes.gridContainer}
      sx={{
        backgroundColor: '#FDFDFD',
        borderRadius:'15px',
        // border: '1px solid #ccc',
        boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
        p: 2,
        width: 210,
        height: 210,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '&:hover': { backgroundColor: '#f7f7f7' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Tooltip title={file_name} arrow>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              noWrap
              sx={{ maxWidth: 150 }}
            >
              {file_name}
            </Typography>
          </Tooltip>
        </Box>

        <Box>
          <IconButton
            aria-controls={open ? 'menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'menu-button',
            }}
          >
            <MenuItem
              onClick={() => {
                handlesummary && handlesummary();
                handleMenuClose();
              }}
              disabled={!file_summary}
            >
              <Typography variant="body2">Summary</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleDelete();
                handleMenuClose();
              }}
            >
              <DeleteIcon fontSize="small" />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Delete
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70%',
          overflow: 'hidden',
        }}
      >
        {blob_url ? (
          <Box
            component="img"
            src={blob_url}
            alt="Document Preview"
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        ) : (
          <Typography
            variant="body2"
            color="textSecondary"
          // dangerouslySetInnerHTML={{
          //   __html: file_summary
          //     ? marked(file_summary).split(/\s+/).slice(0, 25).join(' ')
          //     : file_summary,
          // }}
          />
        )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 12,
          fontWeight: 300,
          color: 'black',
        }}
      >
        <Typography variant="caption" fontWeight="bold">
          {date}
        </Typography>
        <Typography variant="caption" fontWeight="bold">
          {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkspaceGridComponent;
