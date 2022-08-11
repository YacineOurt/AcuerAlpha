import { DesignToken, FlexDirectionValue, ColorValue, BorderColorValue, FontSizeValue } from '../types/designToken';
export interface SelectFieldTokens {
    flexDirection: DesignToken<FlexDirectionValue>;
    color: DesignToken<ColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    fontSize: DesignToken<FontSizeValue>;
    _focus: {
        borderColor: DesignToken<BorderColorValue>;
    };
    label: {
        color: DesignToken<ColorValue>;
    };
}
export declare const selectfield: SelectFieldTokens;
