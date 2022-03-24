import React from "react";
import classes from "./Footer.module.css";
import ATag from "../../Tools/ATag.js";
export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.ftleft}>
        <p>🍊🍊ORA</p>
        <p>NGE🍊🍊</p>
      </div>
      <div className={classes.ftmiddle}>
        <div>
          <ATag class={classes.atag}></ATag>
        </div>
        <h4>This website Technology Used</h4>
        <p>HTML/CSS/JS/ReactJS</p>
        <p>© 2022 ORANGE Liu Web Portfolio All Rights Reserved.</p>
        <b>Website Learning on SkillShare</b>
      </div>
    </div>
  );
}
