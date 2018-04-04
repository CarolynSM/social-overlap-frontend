import React, { Component } from "react";
import styled from "styled-components";

import spinner from "./assets/spinner.png";
import UserProfile from "./UserProfile.js";
import Footer from "./Home/Footer.js";

export default class Followers extends Component {
  render() {
    return (
      <div>
        <UserProfile />
        <Title>Followers will go here:</Title>
        <Footer />
      </div>
    );
  }
}

// constructor(props) {
//   super(props);
//   this.renderReport = this.renderReport.bind(this);
// }
//
// renderReport(list) {
//   console.log(list);
//   return list.map(user => {
//     return (
//       <UserContainer>
//         <ProfileImg src={user.profileImg} />
//         <TextContainer>
//           <h2>{user.userName}</h2>
//           <h3>{user.fullName}</h3>
//         </TextContainer>
//       </UserContainer>
//     );
//   });
// }

const Title = styled.h2`
  font-size: 1.2em;
  font-weight: 700;
  padding: 0.5em 0;
  text-align: center;
`;

const UserContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5em 4rem;
`;

const ProfileImg = styled.img`
  border-radius: 50px;
  height: 60px;
  width: 60px;
`;

const TextContainer = styled.div`
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5em 1rem;
  width: 50%;
`;

const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation-name: fadeIn;
  animation-duration: 5s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const UserName = styled.h2`
  text-align: left;
`;

const Spinner = styled.img`
  position: absolute;
  animation-duration: 5s;
  animation-name: fadeOut;
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;
