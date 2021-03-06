import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Col } from "reactstrap";

ColorItem.propTypes = {
  color: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired,
  onColorChange: PropTypes.func,
};

ColorItem.defaultProps = {
  onColorChange: null,
};

function ColorItem(props) {
  const { color, filter, onColorChange } = props;

  const handleColorChange = (color) => {
    if (!onColorChange) return;
    onColorChange(color);
  };

  return (
    <Col md="3">
      <div
        style={{
          backgroundColor: `${color["color"]}`,
          width: "2rem",
          height: "2rem",
          margin: "0.5rem 0",
          borderRadius: "0.5rem",
          cursor: "pointer",
          transform: color["color"] === filter.color ? "scale(1.1)" : "",
          transition: "all .3s easy 0s",
        }}
        className={classNames("border shadow-sm", {
          "border-secondary border-5": color["color"] === filter.color,
        })}
        onClick={() => handleColorChange(color["color"])}
      />
    </Col>
  );
}

export default ColorItem;
