import {Redirect, Route, Router, Switch} from "react-router-dom";
import {RouterApp, routers} from "./routers";

const getFilteredRoutesByAuthorizationUser = (userIsAuth: Boolean) => routers
    .filter(({isGuard = false}) => isGuard === userIsAuth);

export const useRoutes = (isAuthorization: Boolean = false) => {
    const filteredRoutes = getFilteredRoutesByAuthorizationUser(isAuthorization)

    return (<Switch>
        {filteredRoutes.map((router: RouterApp) => <Route key={router.path} exact path={router.path}>{router.component}</Route>)}
        <Redirect
            to={{pathname: isAuthorization ? '/' : '/auth'}}
            exact
        />

    </Switch>);
}
