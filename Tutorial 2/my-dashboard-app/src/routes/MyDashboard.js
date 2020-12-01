import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardMain from "../components/dashboard/DashboardMain";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

// This component is the main html structure for our dashboard screen, it includes:
// - Top App Bar
// - Left Drawer to hold our Filter items
// - Main Dashboard Screen

const MyDashboard = () => {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <CssBaseline />
                <DashboardHeader />
                <main className={classes.content}>
                    <DashboardMain/>
                </main>
            </div>
    );
};

export default MyDashboard;
