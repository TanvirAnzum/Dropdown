import React, { useContext, useState } from "react";
import { DropdownContext } from "../contexts/DropdownContext";

const ListItem = ({ option }) => {
  const { dispatch } = useContext(DropdownContext);
  const [hover, setHover] = useState(false);

  const selectOptions = () => {
    dispatch({
      type: "SELECT_OPTIONS",
      payload: option,
    });
  };

  //   hover checking
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const style = {
    color: hover ? "white" : option.toLowerCase(),
    backgroundColor: hover ? option.toLowerCase() : "",
  };

  return (
    <li
      onClick={selectOptions}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {option}
    </li>
  );
};

export default ListItem;
