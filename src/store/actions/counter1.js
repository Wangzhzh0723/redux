import { ADD1, MINUS1 } from "../action-types";

const actions = {
  add() {
    return {
      type: ADD1
    };
  },
  minus() {
    return {
      type: MINUS1
    };
  },
  promiseAdd() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          type: ADD1
        });
      }, 1000);
    });
  },
  thunkMinus() {
    return () => {
      return {
        type: MINUS1
      };
    };
  }
};
export default actions;
