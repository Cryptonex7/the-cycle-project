import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./components/Home/Home")) ;

const Router = () => (
    <Suspense fallback = {<div> Loading... </div>}>
        <Switch>
            <Route
                component = {Home}
                exact path = "/"
            />
        </Switch>
    </Suspense>
)

export default Router;