/* Package JSON Import will be here */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
/* Package JSON Import will be here */

/* Project Import will be here */
import App from './App';
import store from "./store/store";
import reportWebVitals from './reportWebVitals';
/* Project Import will be here */

/* Styles will be here */
import 'antd/dist/antd.css';
import "./styles/app.css";
/* Styles will be here */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
