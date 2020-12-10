import React from "react";
import ReactReduxContext from "./ReactReduxContext";
import { bindActionCreators } from "../redux";

// hook 版

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(OldComponent) {
    return function(props) {
      const { store } = React.useContext(ReactReduxContext);

      const { dispatch, getState, subscribe } = store;
      // 获取最新状态
      const prevState = getState();
      const stateProps = React.useMemo(() => mapStateToProps(prevState), [
        prevState
      ]);
      const dispatchProps = React.useMemo(() => {
        if (typeof mapDispatchToProps === "object" && mapDispatchToProps) {
          return bindActionCreators(mapDispatchToProps, dispatch);
        } else if (typeof mapDispatchToProps === "function") {
          return mapDispatchToProps(dispatch, props);
        }
        return { dispatch };
      }, [dispatch, props]);
      const [, update] = React.useReducer(x => x + 1, 0);
      React.useLayoutEffect(() => subscribe(update), [subscribe]);
      return <OldComponent {...props} {...stateProps} {...dispatchProps} />;
    };
  };
}

// class 版

// /**
//  * hoc
//  * @param {*} mapStateToProps 把仓库的属性映射为组件的属性对象
//  * @param {*} mapDispatchToProps 把dispatch映射为组建的属性
//  */
// export default function connect(mapStateToProps, mapDispatchToProps) {
//   return function(OldComponent) {
//     return class extends React.Component {
//       // 如果给类组件添加contextType 那么会在实力上添加一个context属性值是 ReactReduxContext 的 value 属性
//       static contextType = ReactReduxContext;
//       constructor(props, context) {
//         super(props);
//         this.state = mapStateToProps(context.store.getState());
//       }
//       componentDidMount() {
//         this.unsubscribe = this.context.store.subscribe(() => {
//           this.setState(mapStateToProps(this.context.store.getState()));
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe && this.unsubscribe();
//       }
//       render() {
//         const dispatch = this.context.store.dispatch;
//         let dispatchProps = mapDispatchToProps
//           ? bindActionCreators(mapDispatchToProps, dispatch)
//           : { dispatch };
//         return (
//           <OldComponent {...this.props} {...this.state} {...dispatchProps} />
//         );
//       }
//     };
//   };
// }
