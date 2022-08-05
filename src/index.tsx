import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './plugins/index';
import configureStore from './store/index';
import { message } from 'antd';
const store = configureStore();

ReactDOM.render(
 <Provider store={store}> <App /></Provider>,
  document.getElementById('root')
);
reportWebVitals();
