import React, { Component } from "react";
import styled from "styled-components";

import spinner from "./assets/spinner.png";
import UserProfile from "./UserProfile.js";
import Footer from "./Home/Footer.js";

const demoData = [
  {
    profileImg:
      "https://scontent-lga3-1.cdninstagram.com/vp/d7846d0d4e5070da4311b3f680f47d6c/5B543920/t51.2885-19/11247849_981284811922168_882956497_a.jpg",
    userName: "denverbeerco",
    fullName: "Denver Beer Co."
  },
  {
    profileImg:
      "https://scontent-sea1-1.cdninstagram.com/vp/000df42174e99c4295ca1a9cb40b4e23/5B757596/t51.2885-19/11821120_614894978613189_1279489779_a.jpg",
    userName: "denverpost",
    fullName: "Denver Post"
  },
  {
    profileImg:
      "https://scontent-sea1-1.cdninstagram.com/vp/0ee32da97b98870e0b7663e1e8788315/5B35771E/t51.2885-19/s320x320/28158863_168351630553445_2775065987278438400_n.jpg",
    userName: "5280magazine",
    fullName: "5280 Magazine"
  },
  {
    profileImg:
      "https://scontent-lga3-1.cdninstagram.com/vp/e0a1e5397883309544e950d8ce05b727/5B3DF158/t51.2885-19/s320x320/29095448_1835950023111402_4971949052036907008_n.jpg",
    userName: "rockies",
    fullName: "Colorado Rockies"
  },
  {
    profileImg:
      "https://scontent-lga3-1.cdninstagram.com/vp/9160026658913a5b3718471ba85138bf/5B3AC854/t51.2885-19/11375227_604154553058104_1201110079_a.jpg",
    userName: "denverunionstation",
    fullName: "Denver's Union Station"
  }
];

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.renderReport = this.renderReport.bind(this);
  }

  renderReport(list) {
    console.log(list);
    return list.map(user => {
      return (
        <UserContainer>
          <ProfileImg src={user.profileImg} />
          <TextContainer>
            <h2>{user.userName}</h2>
            <h3>{user.fullName}</h3>
          </TextContainer>
        </UserContainer>
      );
    });
  }

  render() {
    return (
      <div>
        <UserProfile />
        <Title>Your Top 5 Overlapping Users:</Title>
        <ReportContainer>{this.renderReport(demoData)}</ReportContainer>
        <Footer />
      </div>
    );
  }
}

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
