import React,{useState} from "react";
import { Box, Typography, TextField, Button, Chip, Grid, Card, CardContent } from "@mui/material";
import { makeStyles } from '@mui/styles';
import layoutStyles from './layout.style';
import Header from '../Header/Header';
import Workspacegif from '../../Assets/workspace_gif.gif'
import Databasegif from '../../Assets/database_gif.gif'
import Knowledgebasegif from '../../Assets/knowledgebase_gif.gif'
import WorkspacePopup from "../CreateWorkspacePopup/CreateWorkspacePopup";


const useStyles = makeStyles(layoutStyles);
const Layout = () => {
    const classes = useStyles();

    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const handlecardClick = () => {
      setIsPopupOpen(true); 
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false); // Close the popup
    };

    return (
        <div>
            <Header />
            <Box className={classes.container}>
                <Typography variant="h4" className={classes.heading}>
                    What will you create today?
                </Typography>
                <Typography variant="body1" className={classes.subheading}>
                    Describe your own unique request, or try out one of our curated templates.
                </Typography>

                <Box className={classes.searchBox}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M14.6823 14.6312C16.115 13.1857 17 11.1962 17 9C17 4.58175 13.4182 1 9 1C4.58175 1 1 4.58175 1 9C1 13.4182 4.58175 17 9 17C11.222 17 13.2325 16.094 14.6823 14.6312ZM14.6823 14.6312L21 21" stroke="#0B4DA1" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <TextField
                        placeholder="    Generate a list of topics..."
                        variant="outlined"
                        fullWidth
                        className={classes.input}
                    />

                    <Button className={classes.sendButton}>
                        <span>Send</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 22 22" fill="none">
                            <path d="M10.5269 11.003H4.01321M3.82858 11.9342L2.75243 15.44C2.16303 17.3601 1.86833 18.3202 2.07982 18.9113C2.26348 19.4248 2.65793 19.814 3.14467 19.9622C3.70516 20.1328 4.55172 19.7173 6.24484 18.8864L17.0993 13.5594C18.7519 12.7483 19.5782 12.3429 19.8336 11.7795C20.0555 11.2901 20.0555 10.7157 19.8336 10.2263C19.5782 9.66307 18.7519 9.25752 17.0993 8.44646L6.22611 3.11031C4.5381 2.2819 3.6941 1.86769 3.13417 2.03761C2.64789 2.18517 2.25347 2.57338 2.06918 3.08586C1.85696 3.67596 2.14851 4.63393 2.73162 6.54988L3.83067 10.1611C3.93081 10.4902 3.98089 10.6548 4.00066 10.823C4.0182 10.9724 4.01802 11.1235 4.00013 11.2728C3.97996 11.441 3.92951 11.6053 3.82858 11.9342Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Button>
                </Box>

                <Box className={classes.chipContainer}>
                    {["Social media usage", "Tiktok", "US Election", "US Health", "Populations"].map((chip) => (
                        <Chip key={chip} label={chip} className={classes.chip} />
                    ))}
                </Box>


            </Box>
            <Box>
                <Grid container spacing={2} className={classes.cardContainer}>
                    {[
                        {
                            icon: Workspacegif,
                            title: "Workspace",
                            description: "Work environment tailored to digital-first productivity and collaboration.",
                        },
                        {
                            icon: Databasegif,
                            title: "Database",
                            description: "Organized digital data storage for quick access and management.",
                        },
                        {
                            icon: Knowledgebasegif,
                            title: "Knowledge base",
                            description: "Centralized digital data storage for quick access and management.",
                        },
                    ].map((card, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card className={classes.card} onClick={handlecardClick}>
                                <CardContent>
                                    <Box className={classes.cardIcon} sx={{display:'flex',justifyContent:'space-between'}}>
                                        <img
                                            src={card.icon}
                                            alt={`${card.title} icon`}
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                marginBottom: "16px",
                                                objectFit: "contain", // Ensures the GIF is properly scaled
                                            }}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#2C3959" />
                                            <path d="M17 12H12M12 12H7M12 12V7M12 12V17" stroke="#2C3959" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </Box>
                                    <Typography variant="h6" className={classes.cardTitle}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" className={classes.cardDescription}>
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box className={classes.footer}>
                    AI helping with data retrieval and analysis | AI-powered querying of structured data | AI and databases working together for smart insights.
                </Box>
            </Box>

            <WorkspacePopup open={isPopupOpen} onClose={handleClosePopup} />
        </div>
    );
};

export default Layout;
