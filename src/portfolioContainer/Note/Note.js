import React from "react";
import { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading.js";
import ScrollService from "../../utilities/ScrollService.js";
import Animations from "../../utilities/Animations.js";
import NoteCard from "./Card/NoteCard.js";

import "./Note.css";
import "../../index.css";

export default function Note(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const cardDetails = [
    {
      cardId: "c1",
      imgsrc: "https://i.imgur.com/mdNqup3.png",
      rdmLink: "https://hackmd.io/@ndhu-programming-2021/ry5jRC5zt",
      cdbHeading: "C++ for NDHUIM",
      cdbPara:
        "Write down what I learn in C++, and share my knowledge or opinion with others",
      fromDate: "2021/1",
      toDate: "present",
    },
    {
      cardId: "c2",
      imgsrc: "https://i.imgur.com/ijz6Pmb.png",
      rdmLink: "https://hackmd.io/@Nene0808/SkeuB0NyF",
      cdbHeading: "ERP for NDHU IM ERP Club",
      cdbPara:
        "Share my knowledge when I'm Speaker in ERP Sales and Distribution Module",
      fromDate: "2021/9",
      toDate: "present",
    },
    {
      cardId: "c3",
      imgsrc: "https://i.imgur.com/uVKMGPa.png",
      rdmLink: "https://410735038.github.io/",
      cdbHeading: "Github Pages",
      cdbPara: "A place to keep all of my Notes in HackMD",
      fromDate: "2022/1",
      toDate: "present",
    },
  ];
  return (
    <div className="fade-in" id={props.id || ""}>
      <ScreenHeading
        title={"Note"}
        subHeading={"What I had writing in my college"}
      />
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            {cardDetails.map((cardDetails, index) => (
              <NoteCard
                key={cardDetails.cardId}
                imgsrc={cardDetails.imgsrc}
                rdmLink={cardDetails.rdmLink}
                cdbHeading={cardDetails.cdbHeading}
                cdbPara={cardDetails.cdbPara}
                fromDate={cardDetails.fromDate}
                toDate={cardDetails.toDate}
              ></NoteCard>
            ))}
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={require("../../assets/Testimonial/shape-bg.png")} />
      </div>
    </div>
  );
}
