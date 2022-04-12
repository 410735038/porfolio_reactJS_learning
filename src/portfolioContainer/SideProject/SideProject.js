import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classes from "./SideProject.module.css";
import "../../index.css";

import GRG from "../../assets/SideProject/githubrepogetter.PNG";
import pyramid from "../../assets/SideProject/pyramid.png";
import SG from "../../assets/SideProject/shrimpGame.jpg";
import wb from "../../assets/SideProject/website.png";
import GJDriver from "../../assets/SideProject/GJDriver.gif";

export default function SideProject(props) {
  const carouselItemCnt = [
    {
      id: "i1",
      title: "ORANGE's Personal Website",
      content: "Use ReactJS to learning front end.",
      link: "https://test1.neorangene.com",
      imgLink: wb,
    },
    {
      id: "i2",
      title: "Github Repo Getter",
      content: "Fetch Github REST API to get user info.",
      link: "https://test1.neorangene.com/githubrepogetter",
      imgLink: GRG,
    },
    {
      id: "i3",
      title: "Fengshan Shrimp",
      content: "A infinite scroll down game use Phaser3.",
      link: "https://fengshan.ndhu.edu.tw/v13-v4-final-me/v13-v4-final-me/index.html",
      imgLink: SG,
    },
    {
      id: "i4",
      title: "GJ Driver",
      content: "Use Openpose, AR and arduino to implement a game.",
      link: "https://github.com/410735038/DriveAtHome",
      imgLink: GJDriver,
    },
    {
      id: "i5",
      title: "Pyramid-Adventures",
      content: "College Student Research Scholarship.",
      link: "https://github.com/410735038/Pyramid-Adventures",
      imgLink: pyramid,
    },
  ];
  const options = {
    loop: true,
    margin: 10,
    items: 3,
    autoplay: true,
    dots: true,
    smartSpeed: 1000,
    mouseDrag: true,
    reponsive: {
      0: { items: 1 },
      768: { items: 2 },
      1000: { items: 3 },
    },
  };
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
  return (
    <div className="fade-in" id={props.id || ""}>
      <ScreenHeading
        title={"Project"}
        subHeading={"keep what i did before"}
      ></ScreenHeading>
      <section>
        <OwlCarousel
          className="owl-theme"
          {...options}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1000: { items: 3 },
          }}
        >
          {carouselItemCnt.map((innerItem) => (
            <div className={`item ${classes.carouselDiv}`} key={innerItem.id}>
              <div className={classes.carouselItem} >
                <img src={innerItem.imgLink}></img>
                <h4>{innerItem.title}</h4>
                <p>{innerItem.content}</p>
                <a href={innerItem.link} target="_blank">
                  Go!
                </a>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </section>
    </div>
  );
}
