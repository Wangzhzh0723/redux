import React from "react";
import store from "../store";
import { bindActionCreators } from "../redux";
import actions from "../store/actions/counter2";

const boundActions = bindActionCreators(actions, store.dispatch);

export default class Counter extends React.Component {
  state = { number: store.getState().counter2.number };
  componentWillMount() {
    // 组件将要挂载时监听订阅
    this.unlisen = store.subscribe(() => {
      this.setState({
        number: store.getState().counter2.number
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
