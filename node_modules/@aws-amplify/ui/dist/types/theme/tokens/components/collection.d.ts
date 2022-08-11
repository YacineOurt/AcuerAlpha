import { PaginationButtonDisabledTokens, PaginationButtonHoverTokens } from './pagination';
import { StateTokens } from './button';
import { BackgroundColorValue, ColorValue, DesignToken } from '../types/designToken';
interface PaginationTokens {
    current: {
        color: DesignToken<ColorValue>;
        backgroundColor: DesignToken<BackgroundColorValue>;
    };
    button: {
        color: DesignToken<ColorValue>;
        _hover: PaginationButtonHoverTokens;
        _disabled: PaginationButtonDisabledTokens;
    };
}
export interface SearchTokens {
    input: {
        color: DesignToken<ColorValue>;
    };
    button: {
        color: DesignToken<ColorValue>;
        _active: StateTokens;
        _disabled: StateTokens;
        _focus: StateTokens;
        _hover: StateTokens;
    };
}
export interface CollectionTokens {
    pagination: PaginationTokens;
    search: SearchTokens;
}
export declare const collection: CollectionTokens;
export {};
