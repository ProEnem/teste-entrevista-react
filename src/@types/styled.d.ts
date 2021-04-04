import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    metrics: {
      borderRadius: string;
    }
    colors: {
      gray50: string;
      red: string;
      black: string;
    };
    fonts: {
      nunitoBold: string;
      nunitoRegular: string;
    }
  }
}
