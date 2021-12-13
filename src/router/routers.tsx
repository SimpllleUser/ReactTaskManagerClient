import Auth from "../pages/Auth";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import BaseLayout from "../layouts/BaseLayout";
import Projects from "../pages/Projects";

export type RouterApp = {
    path: string;
    isGuard: boolean;
    component: JSX.Element;
};

export const routers:RouterApp[] = [
    {
        path: '/',
        isGuard: true,
        component: <BaseLayout><Home/></BaseLayout>,
    },
    {
        path: '/projects',
        isGuard: true,
        component: <BaseLayout><Projects/></BaseLayout>,
    },
    {
        path: '/auth',
        isGuard: false,
        component: <AuthLayout><Auth/></AuthLayout>,
    }];