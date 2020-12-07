import React from "react";
import { createStore } from "../redux";

const ADD = "ADD";
const MINUS = "MINUS";
const store = createStore(reducer);

function reducer(state = { number: 0 }, action) {
  switch (action.type) {
    case ADD:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
}

export default class Counter extends React.Component {
  state = { number: store.getState().number };
  componentWillMount() {
    // 组件将要挂载时监听订阅
    this.unlisen = store.subscribe(() => {
      this.setState({
        number: store.getState().number
      });
    });
  }
  componentWillUnmount() {
    // 组件移除挂载时 取消监听订阅
    this.unlisen && this.unlisen();
  }
  render() {
    return (
      <>
        <div>{this.state.number}</div>
        <input
          onClick={() => store.dispatch({ type: ADD })}
          type="button"
          value="+"
        />
        <input
          onClick={() => store.dispatch({ type: MINUS })}
          type="button"
          value="-"
        />
      </>
    );
  }
}
