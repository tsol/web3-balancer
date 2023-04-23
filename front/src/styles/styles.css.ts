import { GlobalStyleRule, createGlobalTheme, createTheme, createThemeContract, globalStyle, style } from "@vanilla-extract/css";

const root = createGlobalTheme(":root", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px"
  },
  fonts: {
    heading: "'Open sans', sans-serif",
    body: "'Open sans', sans-serif"
  },
});

export const colors = createThemeContract({
  primary: null,
  secondary: null,
  background: null,
  contrast: null,
  background2: null,
  border: null,
  inputBorder: null,
  active: null,
  text: {
    normal: null,
    dimmed: null,
    contrast: null,
    active: null
  }
});

export const vars = { ...root, colors };

export const text: Record<string, GlobalStyleRule> = {
  h1: {
    fontFamily: vars.fonts.heading,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 40,
    lineHeight: '120%',
  },
  h5: {
    fontFamily: vars.fonts.heading,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '120%',
    textTransform: 'uppercase'
  },
  p0: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '16px',
  },
  p: {
    fontFamily: vars.fonts.body,
    color: vars.colors.primary,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px'
  },
  p2: {
    fontFamily: vars.fonts.body,
    color: vars.colors.primary,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '22px',
  },
  button: {
    fontFamily: vars.fonts.heading,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '120%',
    textTransform: 'uppercase'
  }
};

globalStyle(":root", {
  ... text.p,
  color: vars.colors.text.normal,
  minHeight: "100vh",
  padding: 0,
  margin: 0,
});

globalStyle('h1', text.h1);
globalStyle('h5', text.h5);
globalStyle('button', { 
  ... text.button, 
  padding: [vars.space.large, vars.space.large],
  border: `1px solid ${vars.colors.background}`,
  borderRadius: '4px',
  color: vars.colors.text.contrast,
  backgroundColor: vars.colors.primary
} );

