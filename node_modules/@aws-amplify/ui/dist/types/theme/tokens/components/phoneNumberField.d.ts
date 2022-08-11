import { ColorValue, DesignToken, BorderColorValue, FontSizeValue } from '../types/designToken';
export interface PhoneNumberFieldTokens {
    color: DesignToken<ColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    fontSize: DesignToken<FontSizeValue>;
    _focus: {
        borderColor: DesignToken<BorderColorValue>;
    };
}
export declare const phonenumberfield: {
    color: {
        value: string;
    };
    borderColor: {
        value: string;
    };
    fontSize: {
        value: string;
    };
    _focus: {
        borderColor: {
            value: string;
        };
    };
};
