const defaultState = {
  firstName: "",
  lastName: "",
  age: 0,
  email: "",
  phone: "",
  avatar: "",
  role: "",
  _id: "",
};

export default function user(state = defaultState, action) {
  switch (action.type) {
    case "USER/SET":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
