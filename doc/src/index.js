import React from "react";
import ReactDOM from "react-dom";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import CounterHook from "./components/CounterHook";
import { Provider } from "./react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Counter1 />
    <br />
    <Counter2 />
    <br />
    <CounterHook />
  </Provider>,
  document.querySelector("#root")
);
