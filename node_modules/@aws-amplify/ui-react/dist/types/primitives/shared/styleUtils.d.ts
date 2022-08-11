import * as React from 'react';
import { BaseStyleProps, GridItemStyleProps, GridSpanType, ViewProps } from '../types';
import { Breakpoint, Breakpoints } from '../types/responsive';
import { FlexContainerStyleProps } from '../types/flex';
export declare const isSpanPrimitiveValue: (spanValue: GridItemStyleProps['rowSpan'] | GridItemStyleProps['columnSpan']) => spanValue is GridSpanType;
export declare const getGridSpan: (spanValue: GridSpanType) => string;
export declare const convertGridSpan: (spanValue: GridItemStyleProps['rowSpan'] | GridItemStyleProps['columnSpan']) => GridItemStyleProps['row'] | GridItemStyleProps['column'];
/**
 * Transforms style props to another target prop
 * where the original is a simpler API than the target.
 * This function will remove the original prop and
 * replace target prop values with calculated
 * E.g. rowSpan => row, columnSpan => column
 */
export declare const useTransformStyleProps: (props: ViewProps) => ViewProps;
interface ConvertStylePropsToStyleObjParams {
    props: ViewProps;
    style?: React.CSSProperties;
    breakpoint: Breakpoint;
    breakpoints: Breakpoints;
}
export interface ConvertStylePropsToStyleObj {
    (params: ConvertStylePropsToStyleObjParams): {
        propStyles: React.CSSProperties;
        nonStyleProps: Partial<ViewProps>;
    };
}
/**
 * Convert style props to CSS variables for React style prop
 * Note: Will filter out undefined, null, and empty string prop values
 * @returns CSSProperties styles
 */
export declare const convertStylePropsToStyleObj: ConvertStylePropsToStyleObj;
export declare const useStyles: (props: ViewProps, style: React.CSSProperties) => {
    propStyles: React.CSSProperties;
    nonStyleProps: Partial<ViewProps>;
};
interface SplitProps<PrimitiveProps> {
    flexContainerStyleProps: FlexContainerStyleProps;
    baseStyleProps: BaseStyleProps;
    rest: Omit<PrimitiveProps, keyof FlexContainerStyleProps | keyof BaseStyleProps>;
}
export declare const splitPrimitiveProps: <PrimitiveProps>(props: PrimitiveProps) => SplitProps<PrimitiveProps>;
export {};
