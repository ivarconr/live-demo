import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FlagProvider } from '@unleash/proxy-client-react';

let userId = localStorage.getItem('userId');

if(!userId) {
    userId = Math.round(Math.random() * 1000);
    localStorage.setItem('userId', userId);
};


const config = {
  url: 'http://localhost:4242/api/frontend',
  clientKey: 'default:development.6c7c71bbed5785b778dd79a1d2cbc582b98bb905bc327375b4ac957d',
  refreshInterval: 2,
  appName: 'react-app',
  context: { userId },
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <App userId={userId} />
    </FlagProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
