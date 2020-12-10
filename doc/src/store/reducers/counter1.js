import { ADD1, MINUS1 } from "../action-types";

export default function reducer(state = { number: 0 }, action) {
  switch (action.type) {
    case ADD1:
      return {
        number: state.number + 1
      };
    case MINUS1:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}
