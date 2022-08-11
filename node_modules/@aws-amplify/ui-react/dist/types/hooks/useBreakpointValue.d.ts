import { Breakpoint } from '../primitives/types/responsive';
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/theming/responsive#usebreakpointvalue)
 */
export declare function useBreakpointValue<T>(values: Record<string, T> | T[], defaultBreakpoint?: Breakpoint, propKey?: string): T | string;
