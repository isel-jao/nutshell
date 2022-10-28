const defaultState = {
  firstName: "",
  lastName: "",
  age: 0,
  email: "",
  password: "",
  phone: "",
  avatar: "",
  role: "",
};

export default function user(state = defaultState, action) {
  switch (action.type) {
    case "USER/SET":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
