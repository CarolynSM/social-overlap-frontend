import React, { Component } from "react";

import UserProfile from "./UserProfile.js";
import UserDataButton from "./UserDataButton.js";
import Footer from "./Home/Footer.js";

const User = () => {
  return (
    <div>
      <UserProfile />
      <UserDataButton />
      <Footer />
    </div>
  );
};

export default User;
