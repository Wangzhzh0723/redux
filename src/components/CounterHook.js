import React from "react";
import actions from "../store/actions/counter1";
import { useSelector, useDispatch } from "../react-redux";

// react-redux hook版本
// 不再使用connect
// 而是使用useSelector  useDispatch
// useSelector 类似 mapStateToProps

export default function Counter(props) {
  // 获取一部分状态
  const state = useSelector(state => state.counter1);
  // 获取dispatch方法
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div>{state.number}</div>
      <input onClick={() => dispatch(actions.add())} type="button" value="+" />
      <input
        onClick={() => dispatch(actions.minus())}
        type="button"
        value="-"
      />
    </React.Fragment>
  );
}
