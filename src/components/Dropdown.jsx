import React, { useContext, useState } from "react";
import cross from "../assets/images/cross.png";
import expand from "../assets/images/expand.png";
import { DropdownContext } from "../contexts/DropdownContext";
import ListItem from "./ListItem";
import SelectedItem from "./SelectedItem";

const Dropdown = () => {
  const { dropdownState, dispatch } = useContext(DropdownContext);
  const [isExpand, setIsExpand] = useState(false);

  const clearSelection = () => {
    dispatch({
      type: "CLEAR_SELECTION",
    });
  };

  return (
    <div className="dropdown-container">
      <div className="input">
        <div className="input-display">
          {dropdownState?.selected?.map((option, index) => (
            <SelectedItem key={option + index} option={option} />
          ))}
        </div>
        <div className="input-icons">
          <img src={cross} className="img" alt="" onClick={clearSelection} />
          <hr className="hr"></hr>
          <img
            src={expand}
            className={isExpand ? "img" : "img rotate"}
            alt=""
            onClick={() => setIsExpand(!isExpand)}
          />
        </div>
      </div>
      {isExpand && (
        <ul className="options">
          {dropdownState?.options?.map((option, index) => (
            <ListItem key={index} option={option} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
