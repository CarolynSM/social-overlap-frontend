export function setUser(userName) {
  return {
    type: "SET_USER",
    user: userName
  };
}

export function loadUserProfile(userName) {
  return async function(dispatch) {
    const res = await fetch("https://social-overlap-server.herokuapp.com/api/" + userName);
    const profile = await res.json();
    return dispatch({
      type: "LOAD_USER_PROFILE",
      data: profile,
      view: "PROFILE"
    });
  };
}

export function getReport(view) {
  return {
    type: "GET_REPORT",
    view: "REPORT"
  };
}
