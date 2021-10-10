import {Route, Router, Switch} from "react-router-dom";
import Card from "../components/Card";
import Home from "../pages/Home";
import Auth from "../pages/Auth";

type router = {
    path: string,
    component: JSX.Element
};

export const useRoutes = () => {
    const pages: router[] = [{
        path: '/',
        component: <Home/>,
    },
        {
            path: '/auth',
            component: <Auth/>,
        }]
    return (<Switch>
        {pages.map(page => <Route key={page.path} exact path={page.path}>{page.component}</Route>)}
    </Switch>);
}
