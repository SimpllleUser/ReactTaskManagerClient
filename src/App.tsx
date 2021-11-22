import React, {useEffect} from 'react';
import './App.css';
import {useRoutes} from "./router";
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
import {AuthState} from "./store/auth/reducer";
import {getMe} from "./store/users/actions";
import { AuthContext } from './context/AuthContext';

const App: React.FC = () => {

    const authState = useSelector(({ auth }: AuthState) => auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!authState?.token) return;
        dispatch(getMe());
    }, [authState]);

    const routes = useRoutes(Boolean(authState?.token));

    return (
    <div className="App">
        <AuthContext.Provider value={{ isAuthUser: Boolean(authState) }}>
          { routes }
        </AuthContext.Provider>
    </div>
  );
}

export default App;
