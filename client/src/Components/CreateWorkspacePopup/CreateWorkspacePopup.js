import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, TextField, Button, MenuItem, Box, Typography, Chip } from "@mui/material";
import WorkspacePopupStyles from "./CreateWorkspacePopup.style";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(WorkspacePopupStyles);
const WorkspacePopup = ({ open, onClose }) => {
    const classes = useStyles();
    const [workspaceType, setWorkspaceType] = useState(""); // State to manage selected value
    const [file, setFile] = useState([]);

    // Handle file selection
    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0]; // Get the first file
        setFile(selectedFile); // Set the selected file
    };

    // Handle file drop (allow only one file)
    const handleFileDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0]; // Get the first dropped file
        setFile(droppedFile); // Set the dropped file
    };

    // Handle drag over
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Handle file removal
    const handleRemoveFile = () => {
        setFile(null); // Clear the file
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            className={classes.dialog}
        >
            <DialogTitle disableTypography className={classes.title}>
                <Typography variant="h6" className={classes.titleText}>
                    Create New Workspace
                </Typography>
                <Typography variant="body2" className={classes.subtitleText}>
                    Create a workspace name and type
                </Typography>
            </DialogTitle>
            <DialogContent className={classes.content}>
                <Typography variant="h6" className={classes.titleFieldName}>
                    Name*
                </Typography>
                <TextField
                    fullWidth
                    required
                    variant="outlined"
                    placeholder="Enter workspace name"
                    className={classes.textField}
                />

                <Typography variant="h6" className={classes.titleFieldName}>
                    Type*
                </Typography>
                <TextField
                    fullWidth
                    required
                    select
                    variant="outlined"
                    value={workspaceType}
                    onChange={(e) => setWorkspaceType(e.target.value)}
                    displayEmpty
                    InputProps={{
                        style: {
                            color: workspaceType === "" ? "#9e9e9e" : "inherit", // Placeholder color
                        },
                    }}
                    className={classes.textField}
                >
                    <MenuItem value="" disabled>
                        Enter workspace type
                    </MenuItem>
                    <MenuItem value="finance">Finance</MenuItem>
                    <MenuItem value="health">Health</MenuItem>
                    <MenuItem value="research">Research</MenuItem>
                </TextField>
                <Box
                    className={classes.uploadBox}
                    onDrop={handleFileDrop}
                    onDragOver={handleDragOver}
                >
                    <input
                        type="file"
                        id="fileUpload"
                        style={{ display: 'none' }}
                        onChange={handleFileSelect} // File selection handler
                        accept=".svg,.png,.jpg,.gif"
                    />
                    <label htmlFor="fileUpload" style={{ cursor: 'pointer' }}>
                        <Box className={classes.uploadBoxImg}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M6.66666 13.3333L9.99999 10M9.99999 10L13.3333 13.3333M9.99999 10V17.5M16.6667 13.9524C17.6846 13.1117 18.3333 11.8399 18.3333 10.4167C18.3333 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3975 5.73833 13.3051 5.58145C12.2184 3.73736 10.212 2.5 7.91666 2.5C4.46488 2.5 1.66666 5.29822 1.66666 8.75C1.66666 10.4718 2.36286 12.0309 3.48911 13.1613"
                                    stroke="#344054"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Box>
                        <Typography variant="body2" className={classes.uploadText}>
                            <span>Click to upload</span> or drag and drop
                        </Typography>
                        <Typography variant="caption" className={classes.uploadSubText}>
                            SVG, PNG, JPG or GIF (max. 800x400px)
                        </Typography>
                    </label>

                    {file && (
                        <Box className={classes.uploadBoxFile}>
                            <Chip
                                label={file.name}
                                className="bg-gray-100 p-2 rounded-md mb-1 m-1 file-chips"
                                onDelete={() => handleRemoveFile()}
                                sx={{
                                    backgroundColor: "#f5f5f5",
                                    fontSize: "14px",
                                    marginBottom: "8px",
                                    marginRight: "8px",
                                }}
                            />
                        </Box>
                    )}
                </Box>



                <Box className={classes.buttonContainer}>
                    <Button
                        variant="outlined"
                        onClick={onClose}
                        className={classes.cancelButton}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.confirmButton}
                    >
                        Confirm
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default WorkspacePopup;
