import React, { useContext } from "react";
import { DropdownContext } from "../contexts/DropdownContext";

const SelectedItem = ({ option }) => {
  const { dispatch } = useContext(DropdownContext);

  const unselectOption = () => {
    dispatch({
      type: "UNSELECT_OPTIONS",
      payload: option,
    });
  };

  const style = {
    color: option.toLowerCase(),
  };

  return (
    <div className="selected-item">
      <p style={style}>{option}</p>
      <p onClick={unselectOption} className="closeIcon">
        ×
      </p>
    </div>
  );
};

export default SelectedItem;
