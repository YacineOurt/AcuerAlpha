import { ThemeStylePropKey, ThemeTokenKey } from '../types/theme';
import { ComponentClassNames as ComponentClassNamesType, ComponentClassNameItems } from './types';
/**
 * @internal May be removed in a future release
 */
export declare const ComponentClassObject: ComponentClassNameItems;
export declare const ComponentClassNames: ComponentClassNamesType;
export declare const ComponentText: {
    Alert: {
        dismissButtonLabel: string;
    };
    Collection: {
        searchButtonLabel: string;
        searchNoResultsFound: string;
    };
    Fields: {
        clearButtonLabel: string;
    };
    PaginationItem: {
        currentPageLabel: string;
        nextLabel: string;
        pageLabel: string;
        previousLabel: string;
    };
    PhoneNumberField: {
        countryCodeLabel: string;
    };
    SearchField: {
        searchButtonLabel: string;
    };
    PasswordField: {
        passwordIsHidden: string;
        passwordIsShown: string;
        showPassword: string;
    };
    StepperField: {
        increaseButtonLabel: string;
        decreaseButtonLabel: string;
    };
};
export declare const stylePropsToThemeKeys: Record<ThemeStylePropKey, ThemeTokenKey>;
