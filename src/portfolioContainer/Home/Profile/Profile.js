import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
import ATag from "../../../Tools/ATag.js";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className='="profile-details'>
          <div className="colz">
            <div className="colz-icon">
              <ATag></ATag>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Here is <span className="highlighted-text">ORANGE</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "ORANGE🍊",
                    1000,
                    "ethusiastic Dev💻",
                    1000,
                    "Love kpop😎",
                    1000,
                    "enjoy Online Games🤸",
                    1000,
                    "Passion Teaching✨",
                    1000,
                  ]}
                ></Typical>
              </h1>
              <span className="'profile-role-tagline">
                Rome wasn't built in a day,{" "}
                <span style={{ color: "yellow" }}>Programming</span> wasn't
                built in a day.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Contact ME!{" "}
            </button>
            <a href="me.pdf" download="CHENG_YAN_LIU_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
