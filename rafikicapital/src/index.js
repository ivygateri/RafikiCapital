import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from './contexts/StateProvider';
import reducer from './contexts/reducer';
import { initialState } from './contexts/initialState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </Router>
);

