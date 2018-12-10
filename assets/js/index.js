import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from "./components/App";
import reducers from './reducers';
import "../css/main.css";



const app = document.getElementById("app");

ReactDOM.render(
  <Provider store={createStore(reducers)}>
  <App />
  </Provider>
  ,app);
