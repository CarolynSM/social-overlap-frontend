import React, { Component } from "react";
import styled from "styled-components";

import spinner from "./assets/spinner.png";
import UserProfile from "./UserProfile.js";
import Footer from "./Home/Footer.js";

const demoData = [
  {
    profileImg:
      "https://scontent-sea1-1.cdninstagram.com/vp/013b9d2c41786cda8795f255f6448fce/5B337CF3/t51.2885-19/s320x320/21879789_1880238492304636_3853081879263576064_n.jpg",
    userName: "adage",
    fullName: "Ad Age"
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
      "https://scontent-sea1-1.cdninstagram.com/vp/15dbabfad578c0ce88f8f4cc1e491d0c/5B6AAD89/t51.2885-19/s320x320/15251604_1849803945255668_10615432578859008_a.jpg",
    userName: "generalassembly",
    fullName: "General Assembly"
  },
  {
    profileImg:
      "https://scontent-sea1-1.cdninstagram.com/vp/8d0ebac8b4fee7aa7498f4891e981c13/5B3754E3/t51.2885-19/s320x320/13739633_1648409658810275_999417478_a.jpg",
    userName: "zuck",
    fullName: "Mark Zuckerberg"
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
        <Title>Your top 5 common followers:</Title>
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
