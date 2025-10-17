import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string;
            surface: string;
            primary: string;
            text: {
                primary: string;
                secondary: string;
            };
            border: string;
        };
        typography: {
            fontFamily: string;
            sizes: {
                large: string;
                medium: string;
                small: string;
            };
            weights: {
                semibold: number;
                regular: number;
            };
            lineHeights: {
                large: string;
                medium: string;
                small: string;
            };
        };
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        borderRadius: {
            sm: string;
            md: string;
            lg: string;
            full: string;
        };
        shadows: {
            button: string;
        };
    }
}
