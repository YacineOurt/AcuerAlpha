import { Breakpoint, Breakpoints } from '../../types/responsive';
import { ThemeStylePropKey } from '../../types/theme';
export declare const getValueAtCurrentBreakpoint: <Value>({ breakpoint, breakpoints, propKey, values, }: {
    values: Value | Record<string, Value> | Value[];
    breakpoint: Breakpoint;
    breakpoints: Breakpoints;
    propKey?: ThemeStylePropKey;
}) => string | Value;
