import Home from "../portfolioContainer/Home/Home.js";
import AboutMe from "../portfolioContainer/AboutMe/AboutMe.js";
import Resume from "../portfolioContainer/Resume/Resume.js";
import Note from "../portfolioContainer/Note/Note.js";
import SideProject from "../portfolioContainer/SideProject/SideProject.js";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Note",
    component: Note,
  },
  {
    screen_name: "SideProject",
    component: SideProject,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
