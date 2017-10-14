import React from 'react';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Projects from './Projects';

const RightComponent = (props) => {
  return (
    <div className="w3-twothird">
      <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
        <WorkExperience work={props.data.work}/>
      </div>
      <Projects projects={props.data.projects}/>
      <Education edu={props.data.edu}/>
    </div>
  );
}
export default RightComponent;