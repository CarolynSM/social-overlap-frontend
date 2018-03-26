import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { loadUserProfile } from "./actions.js";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.renderProfile = this.renderProfile.bind(this);
  }

  renderProfile(profile) {
    const array = Object.values(profile);
    console.log(array);
  }

  render() {
    const userName = this.props.currentUser;
    const name = this.props.currentProfile.profile.fullName;
    const profileImg = this.props.currentProfile.profile.profileImg;
    const totalFollowers = this.props.currentProfile.profile.totalFollowers;
    return (
      <div>
        <ProfileInfo>
          <ProfileImg src={profileImg} />
          <NameContainer>
            <UserName>{userName}</UserName>
            <FullName>{name}</FullName>
            <Followers>Total Followers: {totalFollowers}</Followers>
          </NameContainer>
        </ProfileInfo>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentProfile: state.user.currentProfile
});

const mapDispatchToProps = dispatch => ({
  loadUserProfile: handle => {
    dispatch(loadUserProfile(handle));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 2rem;
`;

const ProfileImg = styled.img`
  border-radius: 50px;
  height: 30%;
  width: 30%;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5em 1rem;
`;

const UserName = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.5em;
`;

const FullName = styled.h2`
  font-size: 1.2em;
  line-height: 1.2em;
`;

const Followers = styled.h3`
  font-size: 1rem;
  line-height: 1.2em;
`;
