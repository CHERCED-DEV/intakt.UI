import { EnumIcoFontIcons } from "../../../enums/components/base-components/base-icon-ux.enum";

export interface BaseIconProps {
    iconName: EnumIcoFontIcons;
    size?: number;
    color?: string;
    ariaLabel?: string;
    role?: string;
}
