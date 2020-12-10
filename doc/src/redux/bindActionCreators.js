function bindActionCreator(actionCreater, dispatch) {
  return (...args) => {
    dispatch(actionCreater(...args));
  };
}
export default function bindActionCreators(actionCreater, dispatch) {
  // 函数
  if (typeof actionCreater === "function") {
    return bindActionCreator(actionCreater, dispatch);
  }
  // 对象
  const bindActionCreators = {};
  Object.entries(actionCreater).forEach(([key, value]) => {
    bindActionCreators[key] = bindActionCreator(value, dispatch);
  });
  return bindActionCreators;
}
