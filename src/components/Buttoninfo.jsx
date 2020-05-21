import React from "react";
import { ReactComponent as YourSvg } from "../icons/search-plus-solid.svg";

const Buttoninfo = ({ dataSliderHandler, dataListaFull, dataIdSelf }) => {
  const icon = {
    search_ico: {
      width: "30px",
      color: "#404448",
      cursor: "pointer"
    }
  };

  return (
    <YourSvg
      style={icon.search_ico}
      onClick={() => dataSliderHandler(dataListaFull, dataIdSelf)}
    />
  );
};

export default Buttoninfo;
