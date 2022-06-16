import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './components/Redux/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(rootReducer)}>
    <App/>
  </Provider>
);