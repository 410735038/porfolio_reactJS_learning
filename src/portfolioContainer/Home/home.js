import React from "react";
import Header from "./header/header";
import Profile from "./profile/profile";
import Footer from "./footer/footer";
import './home.css';
export default function Home() {
  return (
    <div className="home-container">
      <Header></Header>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
}
