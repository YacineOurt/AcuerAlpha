import { ColorValue, DesignToken } from '../types/designToken';
interface LinkStateTokens {
    color: DesignToken<ColorValue>;
}
export interface LinkTokens {
    active: LinkStateTokens;
    color: DesignToken<ColorValue>;
    focus: LinkStateTokens;
    hover: LinkStateTokens;
    visited: LinkStateTokens;
}
export declare const link: LinkTokens;
export {};
