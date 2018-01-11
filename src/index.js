import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import todoStore from './todoStore';

ReactDOM.render(<App store={todoStore} />, document.getElementById('root'));
registerServiceWorker();
