import React from 'react';
import {connect} from "react-redux"
import { removeFeature } from "../Actions"

const AddedFeature = props => {

  const handleRemove = () => {
    props.removeFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemove} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
