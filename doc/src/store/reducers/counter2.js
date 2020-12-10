import { ADD2, MINUS2 } from "../action-types";

export default function reducer(state = { number: 0 }, action) {
  switch (action.type) {
    case ADD2:
      return {
        number: state.number + 3
      };
    case MINUS2:
      return {
        number: state.number - 2
      };
    default:
      return state;
  }
}
