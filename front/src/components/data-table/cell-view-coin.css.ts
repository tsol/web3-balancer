import { style } from "@vanilla-extract/css";
import { vars, text } from "@/styles/styles.css";


export const coinView = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
});

export const icon = style({
  padding: 0,
  margin: 0,
  height: '36px',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const label = style(text.p);
export const comment = style({
  ... text.p0,
  color: vars.colors.text.dimmed
});
