import { ColorValue, DesignToken, FontSizeValue, FlexDirectionValue, TextAlignValue, BorderColorValue } from '../types/designToken';
interface StepperFieldInputTokens {
    textAlign: DesignToken<TextAlignValue>;
    color: DesignToken<ColorValue>;
    fontSize: DesignToken<FontSizeValue>;
}
interface ButtonStateColorTokens {
    color: DesignToken<ColorValue>;
    backgroundColor: DesignToken<ColorValue>;
}
export interface StepperFieldTokens {
    borderColor: DesignToken<BorderColorValue>;
    flexDirection: DesignToken<FlexDirectionValue>;
    input: StepperFieldInputTokens;
    button: {
        color: DesignToken<ColorValue>;
        backgroundColor: DesignToken<ColorValue>;
        _active: ButtonStateColorTokens;
        _focus: ButtonStateColorTokens;
        _disabled: ButtonStateColorTokens;
        _hover: ButtonStateColorTokens;
    };
}
export declare const stepperfield: StepperFieldTokens;
export {};
