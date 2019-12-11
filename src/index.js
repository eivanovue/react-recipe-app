import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import style from "./loader.module.css";


const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress && 
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        /* bring your own prefixes */
        transform: "translate(-50%, -50%)"
      }}
    >
      <Loader type="TailSpin" color="#ffffff" height="150" width="150" />
    </div>
};

ReactDOM.render(
    <div>
        <App />
        <LoadingIndicator/>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
