import React from "react";

const ProjectItem = props => {
  return (
    <div className="w3-container">
      <h5 className="w3-opacity">
        <b>{props.project.name}</b>
      </h5>
      <h6 className="w3-text-red">
        <i className="fa fa-calendar fa-fw w3-margin-right" />
        {props.project.timeLine}
      </h6>
      <p>{props.project.summary}</p>
      <hr />
    </div>
  );
};
export default ProjectItem;
