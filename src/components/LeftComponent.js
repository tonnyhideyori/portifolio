import React from 'react';
import LeftHeaderPic from './LeftHeaderPic';
import LeftHeaderContact from './LeftHeaderContact';
import LeftSkills from './LeftSkills';
import Languages from './Languages';

const LeftComponent = (props) => {
  return (
    <div className="w3-third">
      <div className="w3-white w3-text-grey w3-card-4">
        <LeftHeaderPic />
        <div className="w3-container">
          <LeftHeaderContact />
          <LeftSkills skills={props.data.skills}/>
          <Languages languages={props.data.languages}/>
        </div>
      </div>
      <br/>
    </div>
  );
}
export default LeftComponent;