import { createTheming, ThemingType } from '@callstack/react-theme-provider';

export type Theme = {
    primaryColor: string,
    secondayColor: string,
    textColor: string,
    backgroundColor: string,
};

export const themes: { [key: string]:  Theme} = {
    default: {
        primaryColor: 'black',
        secondayColor: 'white',
        textColor: 'black',
        backgroundColor: 'white',
    },
    dark: {
        primaryColor: 'white',
        secondayColor: 'black',
        textColor: 'white',
        backgroundColor: 'black',
    },
};

const {ThemeProvider, withTheme}: ThemingType<Theme> = createTheming(themes.default);

export {ThemeProvider, withTheme};
