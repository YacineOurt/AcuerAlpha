import { BackgroundColorValue, BorderColorValue, BorderWidthValue, ColorValue, DesignToken } from '../types/designToken';
export interface RadioGroupTokens {
    radio: {
        borderWidth: DesignToken<BorderWidthValue>;
        borderColor: DesignToken<BorderColorValue>;
        backgroundColor: DesignToken<BackgroundColorValue>;
        _checked: {
            color: DesignToken<ColorValue>;
        };
        label: {
            color: DesignToken<ColorValue>;
        };
    };
    label: {
        color: DesignToken<ColorValue>;
    };
}
export declare const radiogroup: RadioGroupTokens;
