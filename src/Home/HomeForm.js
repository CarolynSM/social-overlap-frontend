import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setUser, loadUserProfile } from "../actions.js";

class HomeForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <Label htmlFor="handle">Whose followers do you want:</Label>
        <Input
          type="text"
          name="handle"
          onChange={event => this.props.setUser(event.target.value)}
        />
        <Submit type="submit" onClick={() => this.props.loadUserProfile(this.props.currentUser)}>
          Start
        </Submit>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  profile: state.user.profile
});

const mapDispatchToProps = dispatch => ({
  setUser: userName => {
    dispatch(setUser(userName));
  },
  loadUserProfile: handle => {
    dispatch(loadUserProfile(handle));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeForm);

const Form = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 0;
`;

const Label = styled.label`
  font-size: 1.5em;
  padding: 1rem;
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid var(--grey);
  font: var(--primary-font);
  font-size: 1.2em;
  width: 70%;
`;

const Submit = styled.button`
  background-color: var(--yellow);
  border-radius: 25px;
  font: var(--primary-font);
  font-size: 1.2em;
  margin: 1rem;
  padding: 0.7em 0;
  text-transform: uppercase;
  width: 70%;
`;
