class Subscription {
  constructor(store) {
    this.listeners = [];
    // 订阅仓库变化事件, 当仓库状态发生变化的时候执行回调
    store.subscribe(this.notify);
  }
  subscribe = listener => {
    // 订阅
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  };
  notify = () => {
    // 通知监听函数执行
    this.listeners.forEach(l => l());
  };
}

export default Subscription;
