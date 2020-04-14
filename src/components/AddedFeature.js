import React from 'react';
import { useDispatch } from "react-redux"
import { removeFeature } from "../Actions"

const AddedFeature = props => {
  const dispatch = useDispatch()
  const handleRemove = () => {
    dispatch(removeFeature(props.feature))
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemove} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

//export default connect(null, {removeFeature})(AddedFeature);
export default AddedFeature;