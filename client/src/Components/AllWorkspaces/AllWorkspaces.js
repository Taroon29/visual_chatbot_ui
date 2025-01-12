import React, { useState } from "react";
// import { Box, Typography, TextField, Button, Chip, Grid, Card, CardContent } from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import allworkspaceStyles from './AllWorkspaces.style';
import Header from '../Header/Header';



const useStyles = makeStyles(allworkspaceStyles);
const Allworkspace = () => {
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState(0);
    // const [folderData, setFolderData] = useState([]);
    const folderData = [
        {
            title: "Data Visualization Code Reconstruction",
            fileCount: 5,
            lastModified: "16 Sep",
        },
        {
            title: "Machine Learning Models",
            fileCount: 8,
            lastModified: "10 Sep",
        },
        {
            title: "Frontend UI Components",
            fileCount: 12,
            lastModified: "01 Sep",
        },
    ];


    const tabs = ["All", "Finance", "Health", "Research", "Sales data"];
    return (
        <div>
            <Header />
            <Box className={classes.container}>
                <Typography variant="h5" className={classes.title}>
                    Workspace Folders
                </Typography>
                <Box className={classes.tabContainer}>
                    {tabs.map((tab, index) => (
                        <Button
                            key={index}
                            className={`${classes.tabButton} ${activeTab === index ? "active" : ""
                                }`}
                            variant="outlined"
                            onClick={() => setActiveTab(index)}
                        >
                            {tab}
                        </Button>
                    ))}
                </Box>

                <Box className={classes.folderContainer}>
                    {folderData.map((folder, index) => (
                        <Box key={index} className={classes.folderCard}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="220"
                                height="90"
                                viewBox="0 0 200 90"
                                fill="none"
                            >
                                {/* Main Folder SVG */}
                                <path
                                    d="M0 12.7119V68.1356V90H199.905V39.1525C201.129 18.4068 190.216 12.8814 184.606 12.7119C156.388 12.5424 99.2386 12.2034 96.3828 12.2034C93.527 12.2034 91.1132 10.8475 90.2633 10.1695C87.3735 7.9661 81.2879 3.25424 80.064 2.0339C78.8401 0.813559 76.1543 0.169492 74.9644 0H11.7291C0 3.42578e-05 0 9.83051 0 12.7119Z"
                                    fill="#E7E7E7"
                                />
                            </svg>

                            <Box className={classes.folderCardInner}>
                                <Box className={classes.folderIcon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="17"
                                        viewBox="0 0 14 17"
                                        fill="none"
                                    >
                                        {/* Folder Icon SVG */}
                                        <path
                                            d="M12.1915 16H1.80854C1.36024 16 1 15.6688 1 15.2566V1.74338C1 1.33121 1.36024 1 1.80854 1H12.1915C12.6398 1 13 1.33121 13 1.74338V15.2566C12.992 15.6688 12.6318 16 12.1915 16Z"
                                            fill="#69AEF8"
                                            stroke="#1E247E"
                                            strokeWidth="0.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                        />
                                        {/* Additional paths omitted for brevity */}
                                    </svg>
                                    <Typography variant="subtitle1" className={classes.folderTitle}>
                                        {folder.title.length > 36 ? `${folder.title.slice(0, 36)}...` : folder.title}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" className={classes.fileCount}>
                                    {folder.fileCount} Files
                                </Typography>
                                <Typography variant="body2" className={classes.lastModified}>
                                    <span>Last Modified: {folder.lastModified}</span>
                                    <Box className={classes.deleteButtondivider}></Box>
                                    <Box className={classes.deleteButton}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="10"
                                            height="12"
                                            viewBox="0 0 10 12"
                                            fill="none"
                                        >
                                            {/* Delete Icon SVG */}
                                            <path
                                                d="M1.57143 3.35294V9.82353C1.57143 10.4733 2.0831 11 2.71429 11H7.28571C7.91691 11 8.42857 10.4733 8.42857 9.82353V3.35294M1.57143 3.35294H1M1.57143 3.35294H2.71429M8.42857 3.35294H9M8.42857 3.35294H7.28571M2.71429 3.35294V2.17647C2.71429 1.52672 3.22596 1 3.85714 1H6.14286C6.77406 1 7.28571 1.52672 7.28571 2.17647V3.35294M2.71429 3.35294H7.28571M3.85714 5.70588V8.64706M6.14286 5.70588V8.64706"
                                                stroke="#CDC8C8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Box>
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>


        </div>
    );
};

export default Allworkspace;
