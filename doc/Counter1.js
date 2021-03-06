import React from "react";
import { createStore, bindActionCreators } from "../redux";

const ADD = "ADD";
const MINUS = "MINUS";
const store = createStore(reducer);

function reducer(state = { number: 0 }, action) {
  switch (action.type) {
    case ADD:
      return { number: state.number + action.payload.amount };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
}

function add(amount) {
  //ActionCreators
  return {
    type: ADD,
    payload: {
      amount
    }
  };
}

function minus() {
  //ActionCreators
  return { type: MINUS };
}
let actions = {
  add,
  minus
};
// bindActionCreators
// 将action和dispatch绑定 用于简化操作
// let add = bindActionCreators(addAction, store.dispatch);
// let minus = bindActionCreators(minusAction, store.dispatch);
let boundActions = bindActionCreators(actions, store.dispatch);

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
          onClick={boundActions.add.bind(this, 5)}
          type="button"
          value="+"
        />
        <input onClick={boundActions.minus} type="button" value="-" />
      </>
    );
  }
}
