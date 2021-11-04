import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './plugins/index';
import configureStore from './store/index';
const store = configureStore();

ReactDOM.render(
 <Provider store={store}> <App /></Provider>,
  document.getElementById('root')
);
reportWebVitals();
