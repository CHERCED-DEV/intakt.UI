import React from "react";
import { BaseIconProps } from "../../interfaces/base-interfaces/components/base-icon.interface";

const BaseIcon: React.FC<BaseIconProps> = ({
  iconName,
  size,
  color = "black",
  ariaLabel,
  role = "img",
}) => {
  return (
    <div
      className={`icon icon-${iconName}`}
      style={{ fontSize: size ? `${size}px` : "inherit", color: color }}
      aria-label={ariaLabel || iconName}
      role={role}
    />
  );
};

export default BaseIcon;
