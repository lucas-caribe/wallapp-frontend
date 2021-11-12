import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import PostProvider from './context/PostProvider';
import App from './App';

import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  <UserProvider>
    <PostProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </PostProvider>
  </UserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
