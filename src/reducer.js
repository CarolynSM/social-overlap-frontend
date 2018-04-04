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
<<<<<<< HEAD
=======
        report: action.data.report,
>>>>>>> 06d5c247f7440bab34aae5dc156086f123a2e1af
        view: action.view
      };
    default:
      return state;
  }
}
