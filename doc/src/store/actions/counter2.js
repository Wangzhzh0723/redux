import { ADD2, MINUS2 } from "../action-types";

const actions = {
  add() {
    return {
      type: ADD2
    };
  },
  minus() {
    return {
      type: MINUS2
    };
  }
};
export default actions;
