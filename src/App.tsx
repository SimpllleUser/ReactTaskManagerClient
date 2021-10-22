import React from 'react';
import './App.css';
import {Router} from "react-router-dom";
import {useRoutes} from "./router";
import { createBrowserHistory } from "history";
import 'antd/dist/antd.css';

const App: React.FC = () => {
  const history = createBrowserHistory();
  const routes = useRoutes(true);

  return (
    <div className="App">
        <Router history={history}>
          { routes }
        </Router>
    </div>
  );
}

export default App;
