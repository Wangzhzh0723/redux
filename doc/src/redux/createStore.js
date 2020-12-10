/**
 * redux规定不管应用有多大, 只能有一个仓库
 * 也只能有一个reducer
 * 也只能有一个状态
 */

export default function createStore(reducer) {
  // 单例
  let state;
  let listeners = [];
  // 获取最新状态
  function getState() {
    return state;
  }
  function dispatch(action) {
    // 传入老的状态, 计算出新的状态, 并更新
    state = reducer(state, action);
    // 执行监听
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
    // 返回一个移除监听的函数 unlisten
    return () => {
      listeners = listeners.filter(f => f !== listener);
    };
  }
  // 默认给store赋初始值 走reducer默认处理
  dispatch({ type: "@@REDUX/INIT" });
  return {
    getState,
    dispatch,
    subscribe
  };
}
