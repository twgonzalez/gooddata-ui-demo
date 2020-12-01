import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBack from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(2),
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

const DashboardHeader = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar} styles={{top: '60'}}>
            <Toolbar>
                <IconButton edge="start" className={classes.backButton}  aria-label="menu" component={Link} to="/">
                    <ArrowBack style={{color: '#FFF', fontSize: 30}}/>
                </IconButton>
                <Typography variant="h5" className={classes.title}>
                    <span style={{ fontWeight: 800 }}>SHOP</span>
                    <span style={{ fontWeight: 300, marginLeft: 3 }}>BOARD</span>
                </Typography>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default DashboardHeader;
