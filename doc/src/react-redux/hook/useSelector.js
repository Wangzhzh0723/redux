import React from "react";
import ReactReduxContext from "../ReactReduxContext";

const equalityFn = (a, b) => a === b;

const useSelector = selector => {
  const { store, subscription } = React.useContext(ReactReduxContext);

  const selectorState = useSelectorWithStore(
    selector,
    equalityFn,
    store,
    subscription
  );

  return selectorState;
};

/**
 *
 * @param {*} selector 选择器
 * @param {*} equalityFn 比较两个值是否相等
 * @param {*} store 状态存储
 * @param {*} subscription 订阅器
 */
function useSelectorWithStore(selector, equalityFn, store, subscription) {
  const [, forceUpdate] = React.useReducer(x => x + 1, 1);
  const storeState = store.getState(); //获取总状态
  const selectedState = selector(storeState);
  React.useLayoutEffect(() => subscription.subscribe(forceUpdate), [
    subscription
  ]);
  return selectedState;
}

export default useSelector;
