import React from "react";
import ReactReduxContext from "../ReactReduxContext";

const useDispatch = () => {
  const {
    store: { dispatch }
  } = React.useContext(ReactReduxContext);
  return dispatch;
};

export default useDispatch;
