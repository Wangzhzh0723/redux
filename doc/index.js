import { createStore } from "./redux";

const container = document.querySelector("#container");
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");

/**
 * store
 * 1. 获取仓库中的状态  store.getState()
 * 2. 向仓库派发动作  store.dispatch({type: "ADD"});
 * 3. 仓库收到动作后会吧动作和老的状态传给reducer(处理器)来计算新状态, 并更新
 */
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

add.addEventListener("click", () => {
  store.dispatch({
    type: ADD
  });
});

minus.addEventListener("click", () => {
  store.dispatch({
    type: MINUS
  });
});

// 订阅状态变化
// 当状态变化时会重新执行render回调函数
store.subscribe(render);
function render() {
  container.value = store.getState().number;
}

render();
