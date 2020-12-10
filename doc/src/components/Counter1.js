import React from "react";
import { connect } from "../react-redux";
import actions from "../store/actions/counter1";

class Counter extends React.Component {
  render() {
    const { number, add, minus } = this.props;
    return (
      <React.Fragment>
        <div>{number}</div>
        <input onClick={add} type="button" value="+" />
        <input onClick={minus} type="button" value="-" />
      </React.Fragment>
    );
  }
}
/**
 * 组件和仓库是什么关系?
 * 1 输入  把组件里的数据输入到组件中显示
 * 2 输出  把组件里的派发动作, 从而修改为仓库里的状态
 */

// 把仓库中的状态映射为组件的属性对象
function mapStateToProps(state) {
  return state.counter1; // 当成组件的属性
}

// 第二个参数不写, 会向组件的属性传递dispatch, 否则会将第二个参数合并到props并和dispatch绑定
export default connect(mapStateToProps, actions)(Counter);
