import React from "react";
import Header from "./Header/Header.js";
import Profile from "./Profile/Profile.js";
import Footer from "./Footer/Footer.js";
import './Home.css';
export default function Home() {
  return (
    <div className="home-container">
      <Header></Header>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
}
