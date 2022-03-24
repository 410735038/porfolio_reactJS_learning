import React, {useEffect} from "react";
import "./AboutMe.css";
import "../../index.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading.js";
import ScrollService from "../../utilities/ScrollService.js";
import Animations from "../../utilities/Animations.js";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS = {
    description:
      "I very enjoy working in team environment, and engage heartily in communicate. My friends, teachers always describe me full of passion every time. Furthermore, I always can lead a team to gel and let everyone express their thoughts, finally, we can use team power to complete jobs. And I also love teaching and passionate about trying new technologies. ",
    highlights: {
      bullets: ["Learning ReactJS for web front end", "Learning Data Analysis use python",],
      heading: "Something learning now!!",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe(fadeInScreenHandler);
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div id="ABOUTME" className="about-me-parent">
        <ScreenHeading
          title={"About Me"}
          subHeading={"Why Choose Me?"}
        ></ScreenHeading>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                {""}
                Contact ME!{" "}
              </button>
              <a href="me.pdf" download="Orange.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
