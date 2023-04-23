import { style } from "@vanilla-extract/css";
import { text, vars } from './styles.css';

export const p2 = style(text.p2);
export const h5 = style(text.h5)
export const bg = style({
  backgroundColor: vars.colors.background,
});


