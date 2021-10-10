import {Route, Router, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import AuthLayout from "../layouts/AuthLayout";



export const useRoutes = () => {
    const routers = [{
        path: '/',
        component: <Home/>,
    },
        {
            path: '/auth',
            component:<AuthLayout><Auth/></AuthLayout> ,
        }]
    return (<Switch>
        {routers.map(router => <Route key={router.path} exact path={router.path}>{router.component}</Route>)}
    </Switch>);
}
