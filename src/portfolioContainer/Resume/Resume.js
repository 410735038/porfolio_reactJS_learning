import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading.js";
import ScrollService from "../../utilities/ScrollService.js";
import Animations from "../../utilities/Animations.js";
import "./Resume.css";
import "../../index.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>
            {props.subHeading ? props.subHeading : ""}
            {props.textbookLink ? (
              <span>
                {" "}|{" "}
                <a href={props.textbookLink} target="_blank">
                  Textbook Link(HackMD)
                </a>
              </span>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Club Experience", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
    { label: "Work Experience", logoSrc: "work-history.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "C++", ratingPercentage: 65 },
    { skill: "Python", ratingPercentage: 65 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "present" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "College Student Research Scholarship",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Design an Digital Game to help learning Math. Evaluate the learning effect on junior high school students.",
      subHeading: "Technologies Used:  C#, Fungus",
    },
    {
      title: "GJDriver - Graduate Project in NDHUIM",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Design a Motion Sensing Game implement AR, Arduino Bluetooth Car and use OpenPose to detect body points. ",
      subHeading: "Technologies Used: Python, OpenPose, OpenCV, Arduino",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"National Dong Hwa University, Taiwan"}
        subHeading={"BACHELOR OF INFORMATION MANAGEMENT"}
        fromDate={"2018"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"National Central University, Taiwan"}
        subHeading={"Upcoming Graduate Student of INFORMATION MANGEMENT"}
        fromDate={"2022/9"}
        toDate={"-"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"TA of NDHU Programming"}
          subHeading={"Speaker"}
          fromDate={"2021/1"}
          toDate={"Present"}
          textbookLink={"https://hackmd.io/@ndhu-programming-2021/ry5jRC5zt"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Design Textbook for Student, Teach C++ concepts/syntax in the course.
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Speaker of NDHUIM ERP Club"}
          subHeading={"Speaker of Sales and Distribution"}
          fromDate={"2021/9"}
          toDate={"Present"}
          textbookLink={"https://hackmd.io/@Nene0808/SkeuB0NyF"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Design Textbook for club member, Teach SD knowledge and Use SAP SD Module.
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching and Learning"
        description="Love with sharing my thoughts with others, Passion at teaching and Learning with each other."
      />
      <ResumeHeading
        heading="Music"
        description="Love kpop, jpop, pop music!"
      />
      <ResumeHeading
        heading="Video Games Lover"
        description="League of Legends, Crosscode, Valheim, and so on."
      />
      <ResumeHeading
        heading="Biking"
        description=""
      />
    </div>,

    <div className="resume-screen-container" key="">
      <ResumeHeading
        heading="NO WORK EXPERIENCE"
        description="Learning Hard, Passion, Try best on everything"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div id="RESUME" className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
