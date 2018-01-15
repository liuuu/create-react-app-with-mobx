import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import todoStore from './todoStore';
import storeState from './store.js';
import { Provider } from 'mobx-react';
import mobx from 'mobx';

const stores = { storeState };
ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
