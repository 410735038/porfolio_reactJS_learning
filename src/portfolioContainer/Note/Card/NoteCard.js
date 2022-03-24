import React from "react";

export default function NoteCard(props) {
  return (
    <div className="card-block">
      <div className="header-process">
        <div className="card-header">
          <img src={props.imgsrc} />
        </div>
        <a href={props.rdmLink} className="more">
          Read More
        </a>
      </div>
      <div className="card-body">
        <h3>{props.cdbHeading}</h3>
        <p>
          {props.cdbPara}
        </p>
        <a href={props.rdmLink}>Link</a>
      </div>
      <div className="card-footer">
        <p>{props.fromDate}-{props.toDate}</p>
      </div>
    </div>
  );
}
