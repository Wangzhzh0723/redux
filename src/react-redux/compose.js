// 中间件组合
export default function compose(...funcs) {
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
