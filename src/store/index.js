import { createStore } from "../redux";
import { applyMiddleware } from "../react-redux";
import combineReducer from "./reducers";

// 标准中间件的写法
function logger1(store) {
  return function(next) {
    return function(action) {
      console.log("pre state1", store.getState());
      next(action);
      console.log("next state1", store.getState());
    };
  };
}

function logger2(store) {
  return function(next) {
    return function(action) {
      console.log("pre state2", store.getState());
      next(action);
      console.log("next state2", store.getState());
    };
  };
}

function promiseMiddleware(store) {
  return next => {
    return action => {
      if (typeof action.then === "function") {
        action.then(newAction => {
          store.dispatch(newAction); //重新派发
        });
      } else {
        next(action);
      }
    };
  };
}

function thunkMiddleware(store) {
  return next => {
    return action => {
      if (typeof action === "function") {
        store.dispatch(action(store));
      } else {
        next(action);
      }
    };
  };
}

// 中间件的核心就是改造dispatch方法
const store = applyMiddleware(
  logger1,
  logger2,
  thunkMiddleware,
  promiseMiddleware
)(createStore)(combineReducer);

export default store;
