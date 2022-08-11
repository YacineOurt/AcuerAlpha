import * as React from 'react';
import { Theme } from '@aws-amplify/ui';
export declare type ColorMode = 'system' | 'light' | 'dark';
interface ThemeProviderProps {
    children: React.ReactNode;
    colorMode?: ColorMode;
    theme?: Theme;
    nonce?: string;
}
export declare function AmplifyProvider({ children, colorMode, theme, nonce, }: ThemeProviderProps): JSX.Element;
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/theming)
 */
export declare const ThemeProvider: typeof AmplifyProvider;
export {};
