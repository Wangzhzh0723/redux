import compose from "./compose";

// 中间件的核心就是利用compose改造dispatch方法
export default function applyMiddleware(...middlewares) {
  return function(createStore) {
    // 创建容器的方法
    return function(reducer) {
      const store = createStore(reducer);
      let dispatch;
      const middlewareAPI = {
        getState: store.getState,
        dispatch: action => dispatch(action) // 让middlewareAPI的dispatch指向新的dispatch
      };

      middlewares = middlewares.map(middleware => middleware(middlewareAPI));

      dispatch = compose(...middlewares)(store.dispatch);

      return {
        ...store,
        dispatch
      };
    };
  };
}
