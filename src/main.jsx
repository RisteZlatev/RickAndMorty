import React from 'react';
import ReactDOM from 'react-dom/client'; // for React 18
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </Provider>
);