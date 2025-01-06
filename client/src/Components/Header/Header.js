import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Grid, Popover } from '@mui/material';
import { makeStyles } from '@mui/styles';
import headerStyles from './header.style';

const useStyles = makeStyles(headerStyles);

const Header = () => {
    const classes = useStyles();
    const [anchorNotificationEl, setAnchorNotificationEl] = useState(null);

    const handleNotificationClick = (event) => {
        setAnchorNotificationEl(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setAnchorNotificationEl(null);
    };

    const handleWorkspaceClick = () => {
        console.log('Workspace button clicked');
    };

    const open = Boolean(anchorNotificationEl);

    return (
        <AppBar className={classes.headerContainer} position="sticky">
            <Toolbar>
                <Box display="flex" alignItems="center" sx={{ ml: 3 }}>
                    <Grid onClick={handleWorkspaceClick} className={classes.workspaceButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.75 1.25H4.375C4.375 0.559687 3.81531 0 3.125 0H1.25C0.559687 0 0 0.559687 0 1.25V3.125H10V2.5C10 1.80969 9.44031 1.25 8.75 1.25ZM0 8.75C0 9.44031 0.559687 10 1.25 10H8.75C9.44031 10 10 9.44031 10 8.75V3.75H0V8.75Z" fill="#1B2A52" />
                        </svg>
                        <Typography variant="body1" className={classes.workspaceText}>
                            Workspace
                        </Typography>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M11 6H6M6 6H1M6 6V1M6 6V11" stroke="#1B2A52" strokeLinecap="round" />
                        </svg>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton className={classes.notificationIcon} onClick={handleNotificationClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                    >
                        <path
                            d="M11.7237 9.36734L10.9436 8.12236C10.7798 7.84487 10.6316 7.31987 10.6316 7.01238V5.11491C10.6316 3.35244 9.55512 1.82997 8.00282 1.11748C7.59719 0.427493 6.84835 0 5.99029 0C5.14003 0 4.37561 0.442492 3.96999 1.13998C2.44889 1.86747 1.39582 3.37494 1.39582 5.11491V7.01238C1.39582 7.31987 1.24761 7.84487 1.0838 8.11486L0.295948 9.36734C-0.0160723 9.86983 -0.0862768 10.4248 0.108736 10.9348C0.295948 11.4373 0.740577 11.8273 1.31781 12.0148C2.83111 12.5098 4.42242 12.7498 6.01369 12.7498C7.605 12.7498 9.1963 12.5098 10.7096 12.0223C11.2556 11.8498 11.6769 11.4523 11.8797 10.9348C12.0825 10.4173 12.0279 9.84733 11.7237 9.36734Z"
                            fill="#5447A9"
                        />
                        <path
                            d="M8.2071 13.5077C7.87948 14.3777 7.01362 15.0002 5.99956 15.0002C5.38332 15.0002 4.77488 14.7602 4.34584 14.3327C4.09622 14.1077 3.90901 13.8077 3.7998 13.5002C3.90121 13.5152 4.00262 13.5227 4.11182 13.5377C4.29124 13.5602 4.47846 13.5827 4.66567 13.5977C5.1103 13.6352 5.56273 13.6577 6.01516 13.6577C6.45979 13.6577 6.90442 13.6352 7.34124 13.5977C7.50505 13.5827 7.66887 13.5752 7.82488 13.5527C7.94968 13.5377 8.07449 13.5227 8.2071 13.5077Z"
                            fill="#5447A9"
                        />
                    </svg>
                    <span>Notification</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 7"
                        fill="none"
                    >
                        <path d="M6 6L1 1L6 6ZM6 6L11 1L6 6Z" fill="#5447A9" />
                        <path
                            d="M1 1L6 6L11 1"
                            stroke="#5447A9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </IconButton>

                {/* Popover */}
                <Popover
                    open={open}
                    anchorEl={anchorNotificationEl}
                    onClose={handleNotificationClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Typography sx={{ p: 2 }} variant="subtitle1">
                        You have no new notifications
                    </Typography>
                </Popover>
                <Button className={classes.upgradeButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M4.83068 2.78575C5.50869 1.00867 5.84774 0.120128 6.55668 0.010596C7.26572 -0.0989358 7.87511 0.64307 9.094 2.12708L9.40933 2.51101C9.7557 2.93272 9.92884 3.14359 10.1643 3.26399C10.3998 3.38439 10.6709 3.40069 11.2131 3.43332L11.7067 3.46302C13.6147 3.57784 14.5687 3.63525 14.8997 4.27659C15.2308 4.91793 14.7197 5.71846 13.6974 7.31954L13.433 7.73376C13.1425 8.18874 12.9973 8.41624 12.958 8.67594C12.9188 8.93565 12.99 9.19826 13.1324 9.72339L13.2621 10.2016C13.7632 12.0496 14.0138 12.9736 13.5095 13.4795C13.0051 13.9854 12.0798 13.7382 10.229 13.2437L9.75034 13.1157C9.22439 12.9752 8.96146 12.905 8.70176 12.945C8.44205 12.9852 8.21494 13.1312 7.76083 13.4231L7.34731 13.6889C5.74907 14.7162 4.94995 15.2299 4.30717 14.9012C3.66431 14.5725 3.6036 13.6192 3.48209 11.7125L3.45067 11.2192C3.41612 10.6774 3.39884 10.4065 3.27757 10.1716C3.1563 9.93663 2.94475 9.76423 2.52163 9.41953L2.13643 9.10564C0.647486 7.89257 -0.096981 7.28602 0.0101313 6.57697C0.117253 5.86793 1.00501 5.52598 2.78055 4.84208L3.2399 4.66514C3.74443 4.4708 3.99672 4.37363 4.18147 4.18831C4.36622 4.00298 4.46255 3.75049 4.6553 3.2455L4.83068 2.78575Z" fill="white" />
                    </svg>
                    <span>Upgrade</span>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
