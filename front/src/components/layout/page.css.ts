import { createTheme, style } from "@vanilla-extract/css";
import { vars, colors, text } from "@/styles/styles.css";

export const blackPage = createTheme(colors, {
  primary: "white",
  contrast: "black",
  secondary: "#FFFFFF50",
  background: "black",
  background2: "#FFFFFF50",
  border: "#F2F2F2",
  inputBorder: "#9E9E9E",
  active: "#F0F8FF",
  text: {
    normal: "white",
    contrast: "black",
    dimmed: "#FFFFFF50",
    active: "#0080FF",
  }
});

export const whitePage = createTheme(colors, {
  primary: "#2E2E2E",
  contrast: "white",
  secondary: "#0000007f",
  background: "#E8EBEE",
  background2: "#F7F7F7",
  border: "#F2F2F2",
  inputBorder: "#9E9E9E",
  active: "#F0F8FF",
  text: {
    normal: "#2E2E2E",
    dimmed: "#0000007f",
    contrast: "white",
    active: "#0080FF",
  }
});


export const page = style({
  color: vars.colors.primary,
  backgroundColor: vars.colors.background,
  minHeight: '100vh',
  padding: ['3rem', '5.5rem'],

  '@media': {
    'screen and (max-width: 600px)': {
      padding: ['1rem', '1rem']
    },
  },
});


export const contentColumn = style({
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 11rem)',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 600px)': {
      height: 'calc(100vh - 2rem)',
      textAlign: 'center'
    },
  },
});

export const contentBottom = style({
  height: 'min-content',
  marginTop: 'auto',
  paddingTop: '2rem',
});


export const privacy = style({
  ... text.h5,
  color: vars.colors.text.dimmed,
});

export const rights = style(text.p2);

