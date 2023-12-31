import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
      domain={import.meta.env.VITE_OAUTH_DOMAIN}
      clientId={import.meta.env.VITE_OAUTH_CLIENTID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
