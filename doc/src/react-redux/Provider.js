import React from "react";
import ReactReduxContext from "./ReactReduxContext";
import Subscription from "./utils/Subscription";

export default function Provider({ store, children }) {
  const subscription = new Subscription(store);
  const value = {
    subscription,
    store
  };
  return (
    <ReactReduxContext.Provider value={value}>
      {children}
    </ReactReduxContext.Provider>
  );
}
