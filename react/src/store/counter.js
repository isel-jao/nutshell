const defaultState = 0;

export default function counter(state = defaultState, action) {
  switch (action.type) {
    case "COUNT/INCREMENT":
      return state + 1;
    case "COUNT/DECREMENT":
      return state - 1;
    case "COUNT/RESET":
      return defaultState;
    case "COUNT/SET":
      return action.payload;
    default:
      return state;
  }
}
