import React, { Component } from "react";
import { connect } from "react-redux";

import HomeLogo from "./Home/HomeLogo.js";
import HomeForm from "./Home/HomeForm.js";
import User from "./User.js";
import Report from "./Report.js";
import Followers from "./Followers.js";
import { loadUserProfile } from "./actions.js";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  currentView() {
    console.log("props", this.props);
    const viewState = this.props.view;
    console.log("view state", viewState);
    switch (viewState) {
      case "HOME":
        return <HomeForm />;
      case "PROFILE":
        return <User />;
      case "REPORT":
        return <Report />;
      case "FOLLOWERS":
        return <Followers />;
      default:
        return <HomeForm />;
    }
  }

  render() {
    return (
      <div>
        <HomeLogo />
        <main>{this.currentView()}</main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  profile: state.user.profile,
  view: state.user.view
});

const mapDispatchToProps = dispatch => ({
  loadUserProfile: handle => {
    dispatch(loadUserProfile(handle));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
