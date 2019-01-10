import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Dashboard =lazy(() => import("./components/Dashboard/Dashboard"));
const GoogleDashboard =lazy(() => import("./components/Dashboard/GoogleDashboard"));
const Home = lazy(() => import("./components/Home/Home")) ;

const Router = () => (
    <Suspense fallback = {<div> Loading... </div>}>
        <Switch>
            <Route
                exact path = "/"
                component = {Home}
            />
            <Route
                exact path = "/dashboard"
                component = {Dashboard}
            />
            <Route
                path = "/auth/google/callback"
                component = {GoogleDashboard}
            />
        </Switch>
    </Suspense>
)

export default Router;