const initialState = {
  currentUser: undefined,
  currentUserId: undefined,
  currentProfile: {},
  report: undefined,
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
      return {
        ...state,
        currentUserId: action.data.profile.userId,
        currentProfile: action.data,
        view: action.view
      };
    case "GET_REPORT":
      return {
        ...state,
        report: action.data.report,
        view: action.view
      };
    default:
      return state;
  }
}
