import React from 'react';
import './App.css';
import {useRoutes} from "./router";
import 'antd/dist/antd.css';
import {useSelector} from "react-redux";
import {AuthState} from "./store/auth/reducer";

const App: React.FC = () => {
    const authState = useSelector(({ auth }: AuthState) => auth);
    const routes = useRoutes(Boolean(authState?.token));

    return (
    <div className="App">
          { routes }
    </div>
  );
}

export default App;
