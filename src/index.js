import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import hotelList from "./data/hotel-list.json";

import "./index.css";
import App from "./App";
import reducer from "./store/reducer";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
