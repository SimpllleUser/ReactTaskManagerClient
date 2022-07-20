import { useSelector } from "react-redux";
import {Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { AuthRootState } from "../store/auth/reducer";
import {RouterApp, routers} from "./routers";



const getFilteredRoutesByAuthorizationUser = (userIsAuth: Boolean) => routers
    .filter(({isGuard = false}) => isGuard === userIsAuth);
const getRedirectPath = (isAuthorization: Boolean) => isAuthorization ? '/' : '/auth';

export const useRoutes = (isAuthorization: Boolean = false) => {
    const isUserActive = useSelector((store: AuthRootState) => Boolean(store.auth.userActive?.token));
    const filteredRoutes = getFilteredRoutesByAuthorizationUser(isUserActive);
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
