import React from "react";
import img from "../download.png";

const TintImage = ({ tintType, width, marginLeft }) => {
  let imageSource;
  switch (tintType) {
    case "ceramic-tint":
      imageSource = "../download";
      break;
    case "carbon-tint":
      imageSource = "/path/to/carbon-tint-image.jpg";
      break;
    default:
      imageSource = "/path/to/default-image.jpg";
  }

  return (
    <div>
      <img
        src={img}
        alt="Tint"
        style={{ width: width, marginLeft: marginLeft }}
      />
    </div>
  );
};

export default TintImage;
