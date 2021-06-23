import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from "./Provider";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


