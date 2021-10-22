import Auth from "../pages/Auth";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";

export type RouterApp = {
    path: string;
    isGuard: boolean;
    component: JSX.Element;
};

export const routers:RouterApp[] = [
    {
        path: '/',
        isGuard: true,
        component: <Home/>,
    },
    {
        path: '/auth',
        isGuard: false,
        component: <AuthLayout><Auth/></AuthLayout>,
    }];