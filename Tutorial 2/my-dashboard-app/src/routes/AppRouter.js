import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { WorkspaceProvider } from "../contexts/Workspace";
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import MyDashboard from './MyDashboard';

import styles from "./AppRouter.module.scss";
// import { useAuth } from "../contexts/Auth";
// import { AuthStatus } from "../contexts/Auth/state";

/*
 const RedirectIfNotLoggedIn = () => {
     const auth = useAuth();
     const shouldRedirectToLogin = auth.authStatus === AuthStatus.UNAUTHORIZED;
     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
 };
*/

const AppRouter = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* WorkspaceProvider depends on Router so it must be nested */}
                <WorkspaceProvider>
                <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/my-dashboard" component={MyDashboard}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                </WorkspaceProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
