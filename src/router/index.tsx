import {Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {RouterApp, routers} from "./routers";


const getFilteredRoutesByAuthorizationUser = (userIsAuth: Boolean) => routers
    .filter(({isGuard = false}) => isGuard === userIsAuth);
const getRedirectPath = (isAuthorization: Boolean) => isAuthorization ? '/' : '/auth';

export const useRoutes = (isAuthorization: Boolean = false) => {
    const filteredRoutes = getFilteredRoutesByAuthorizationUser(isAuthorization);
        return (<Router>
        <Switch>
            {filteredRoutes.map((router: RouterApp) => <Route key={router.path} exact path={router.path}>
                {router.component}
            </Route>)}
            <Redirect
                to={{pathname: getRedirectPath(isAuthorization)}}
                exact
            />
        </Switch></Router>);
}
