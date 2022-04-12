import { Fragment } from "react";
import './ATag.css';
export default function ATag() {
  return (
    <Fragment >
      <a href="https://www.facebook.com/profile.php?id=100001800701111">
        <i className="fa fa-facebook-square"></i>
      </a>
      <a href="https://github.com/410735038">
        <i className="fa fa-github"></i>
      </a>
      <a href="https://hackmd.io/@ndhu-programming-2021/ry5jRC5zt">
        <i className="fa fa-book"></i>
      </a>
      <a href="https://www.instagram.com/_steven0808_/">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="https://www.youtube.com/playlist?list=PLMvePzJKbmcuqVlNPfulT7vFjydJFU8K8">
        <i className="fa fa-youtube-square"></i>
      </a>
    </Fragment>
  );
}
