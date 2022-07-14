import React from 'react';
import './App.css';
import {useRoutes} from "./router";
import 'antd/dist/antd.css';
import {useSelector} from "react-redux";
import {AuthRootState} from "./store/auth/reducer";

const App: React.FC = () => {
    const userActive = useSelector((state: AuthRootState) => state.auth.userActive);
    const routes = useRoutes(Boolean(userActive?.token));

    return (
    <div className="App">
          { routes }
    </div>
  );
}

export default App;
