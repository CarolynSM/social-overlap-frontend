export function setUser(userName) {
  return {
    type: "SET_USER",
    user: userName
  };
}

export function loadUserProfile(userName) {
  console.log("test");
  return async function(dispatch) {
    const res = await fetch("https://social-overlap-server.herokuapp.com/" + userName);
    const profile = await res.json();
    return dispatch({
      type: "LOAD_USER_PROFILE",
      data: "Test"
    });
  };
}
