const initialState = {
  currentUser: undefined,
  profile: undefined,
  view: "HOME"
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.user
      };
    case "LOAD_USER_PROFILE":
      console.log("test");
      return {
        ...state,
        profile: action.data
      };
    default:
      return state;
  }
}
