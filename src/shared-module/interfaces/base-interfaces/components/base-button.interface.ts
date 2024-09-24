import { EnumIcoFontIcons } from "../../../enums/components/base-components/base-icon-ux.enum";
import { HorizontalAlign } from "../../../enums/components/position-aling.enum";
import { BaseButtonUxTypes } from "../../../types/base-types/components/base-button.types";

export interface BaseButtonProps {
    label: string;
    onClick: () => void;
    variant?: BaseButtonUxTypes;
    id?: string;
    ariaLabel?: string;
    disabled?: boolean;
    ariaDescribedBy?: string;
    role?: string;
    tabIndex?: number;
    ariaPressed?: boolean;
    iconName?: EnumIcoFontIcons;
    iconPosition?: HorizontalAlign;
}
