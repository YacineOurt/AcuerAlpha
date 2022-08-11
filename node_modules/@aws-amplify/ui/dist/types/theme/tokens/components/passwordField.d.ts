import { ColorValue, DesignToken } from '../types/designToken';
import { StateTokens } from './button';
interface ButtonTokens {
    color: DesignToken<ColorValue>;
    _active: StateTokens;
    _disabled: StateTokens;
    _focus: StateTokens;
    _hover: StateTokens;
}
export interface PasswordFieldTokens {
    color: DesignToken<ColorValue>;
    button: ButtonTokens;
}
export declare const passwordfield: PasswordFieldTokens;
export {};
