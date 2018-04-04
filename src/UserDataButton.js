import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

class UserDataButton extends Component {
  render() {
    return (
      <div>
        <h2>
          We still haven&#39;t figured out how to serve you the data you want...in the meantime:
        </h2>
        <ButtonContainer>
          <Button>Join the Club</Button>
        </ButtonContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentUserId: state.user.currentUserId,
  currentProfile: state.user.currentProfile,
  view: state.user.view
});

export default connect(mapStateToProps)(UserDataButton);

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
