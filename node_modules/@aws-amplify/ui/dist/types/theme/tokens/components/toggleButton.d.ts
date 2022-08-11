import { BackgroundColorValue, BorderColorValue, BorderWidthValue, BoxShadowValue, ColorValue, DesignToken } from '../types/designToken';
interface ToggleButtonHoverTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface ToggleButtonActiveTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface ToggleButtonFocusTokens {
    borderColor: DesignToken<BorderColorValue>;
    color: DesignToken<ColorValue>;
}
interface ToggleButtonDisabledTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    color: DesignToken<ColorValue>;
}
interface ToggleButtonPressedTokens {
    borderColor: DesignToken<BorderColorValue>;
    color: DesignToken<ColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    _hover: ToggleButtonPressedHoverTokens;
}
interface ToggleButtonPressedHoverTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface ToggleButtonPrimaryTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    _focus: ToggleButtonPrimaryFocusTokens;
    _hover: ToggleButtonPrimaryHoverTokens;
    _disabled: ToggleButtonPrimaryDisabledTokens;
    _pressed: ToggleButtonPrimaryPressedTokens;
}
interface ToggleButtonPrimaryFocusTokens {
    borderColor: DesignToken<BorderColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
    color: DesignToken<ColorValue>;
}
interface ToggleButtonPrimaryHoverTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    color: DesignToken<ColorValue>;
}
interface ToggleButtonPrimaryDisabledTokens {
    borderColor: DesignToken<BorderColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    color: DesignToken<ColorValue>;
}
interface ToggleButtonPrimaryDisabledTokens {
    color: DesignToken<ColorValue>;
}
interface ToggleButtonPrimaryPressedTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    color: DesignToken<ColorValue>;
    _focus: TogglButtonPrimaryPressedFocusTokens;
    _hover: TogglButtonPrimaryPressedHoverTokens;
}
interface TogglButtonPrimaryPressedFocusTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    color: DesignToken<ColorValue>;
}
interface TogglButtonPrimaryPressedHoverTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
    color: DesignToken<ColorValue>;
}
interface ToggleButtonLinkTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    color: DesignToken<ColorValue>;
    _hover: ToggleButtonLinkHoverTokens;
    _focus: ToggleButtonLinkFocusTokens;
    _disabled: ToggleButtonLinkDisabledTokens;
    _pressed: ToggleButtonLinkPressedTokens;
}
interface ToggleButtonLinkHoverTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    color: DesignToken<ColorValue>;
}
interface ToggleButtonLinkFocusTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    color: DesignToken<ColorValue>;
}
interface ToggleButtonLinkDisabledTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    color: DesignToken<ColorValue>;
}
interface ToggleButtonLinkPressedTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    color: DesignToken<ColorValue>;
    _focus: ToggleButtonLinkPressedFocusTokens;
    _hover: ToggleButtonLinkPressedHoverTokens;
}
interface ToggleButtonLinkPressedFocusTokens {
    color: DesignToken<ColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface ToggleButtonLinkPressedHoverTokens {
    color: DesignToken<ColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
}
export interface ToggleButtonTokens {
    borderColor: DesignToken<BorderColorValue>;
    color: DesignToken<ColorValue>;
    _hover: ToggleButtonHoverTokens;
    _focus: ToggleButtonFocusTokens;
    _active: ToggleButtonActiveTokens;
    _disabled: ToggleButtonDisabledTokens;
    _pressed: ToggleButtonPressedTokens;
    primary: ToggleButtonPrimaryTokens;
    link: ToggleButtonLinkTokens;
}
export declare const togglebutton: ToggleButtonTokens;
export {};
