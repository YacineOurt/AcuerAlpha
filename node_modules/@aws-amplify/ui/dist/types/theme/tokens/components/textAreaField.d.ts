import { ColorValue, DesignToken, BorderColorValue } from '../types/designToken';
interface TextAreaFieldStateToken {
    borderColor: DesignToken<BorderColorValue>;
}
export interface TextAreaFieldTokens {
    color: DesignToken<ColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    _focus: TextAreaFieldStateToken;
}
export declare const textareafield: TextAreaFieldTokens;
export {};
