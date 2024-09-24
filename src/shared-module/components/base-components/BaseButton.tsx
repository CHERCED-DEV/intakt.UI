import React from "react";
import { EnumBaseButtonUxTypes } from "../../enums/components/base-components/base-button-ux.enum";
import { HorizontalAlign } from "../../enums/components/position-aling.enum";
import { BaseButtonProps } from "../../interfaces/base-interfaces/components/base-button.interface";
import BaseIcon from "../base-components/BaseIcon";

const BaseButton: React.FC<BaseButtonProps> = ({
  label,
  onClick,
  variant = EnumBaseButtonUxTypes.Primary,
  id,
  ariaLabel,
  disabled = false,
  ariaDescribedBy,
  role = "button",
  tabIndex = 0,
  ariaPressed,
  iconName,
  iconPosition = HorizontalAlign.Left,
}) => {
  return (
    <button
      id={id}
      className={`btn btn-${variant}`}
      onClick={onClick}
      aria-label={ariaLabel || label}
      aria-describedby={ariaDescribedBy}
      role={role}
      tabIndex={tabIndex}
      aria-pressed={ariaPressed}
      disabled={disabled}
    >
      {iconName && iconPosition === "left" && (
        <BaseIcon
          iconName={iconName}
          size={16}
          ariaLabel={`btn-icon-${iconName}`}
        />
      )}
      <span>{label}</span>
      {iconName && iconPosition === "right" && (
        <BaseIcon
          iconName={iconName}
          size={16}
          ariaLabel={`btn-icon-${iconName}`}
        />
      )}
    </button>
  );
};

export default BaseButton;
