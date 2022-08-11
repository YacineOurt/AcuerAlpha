import { ColorValue, DesignToken, BorderColorValue, FontSizeValue } from '../types/designToken';
interface TextFieldStateToken {
    borderColor: DesignToken<BorderColorValue>;
}
export interface TextFieldTokens {
    color: DesignToken<ColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    fontSize: DesignToken<FontSizeValue>;
    _focus: TextFieldStateToken;
}
export declare const textfield: TextFieldTokens;
export {};
