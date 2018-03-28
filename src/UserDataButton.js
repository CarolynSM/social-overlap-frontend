import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getReport } from "./actions.js";

class UserDataButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ButtonContainer>
        <Button onClick={() => this.props.getReport("REPORT")}>Run Report</Button>
      </ButtonContainer>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentProfile: state.user.currentProfile,
  report: state.user.report,
  view: state.user.view
});

const mapDispatchToProps = dispatch => ({
  getReport: view => {
    dispatch(getReport(view));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDataButton);

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 17.5em;
  padding-top: 4rem;
`;

const Button = styled.button`
  background-color: var(--yellow);
  border-radius: 25px;
  font: var(--primary-font);
  font-size: 1.2em;
  margin: 1rem;
  padding: 0.7em 0;
  text-transform: uppercase;
  width: 70%;
`;
