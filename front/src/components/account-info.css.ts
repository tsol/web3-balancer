import { style } from "@vanilla-extract/css";
import { vars, text } from "@/styles/styles.css";


export const account = style({
  ...text.p2,
  color: vars.colors.secondary,
});

export const warning = style({
  ...text.p2,
  color: vars.colors.text.active,
});

export const accountLabel = style({
  ...text.p2,
  color: vars.colors.secondary,
});

export const accountDiv = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px'
});

export const accountBox = style({
  ...text.p2,
  fontWeight: 700,
  fontSize: 13,
  lineHeight: '120%',
  letterSpacing: '0.02em',
  textTransform: 'uppercase',

  color: vars.colors.secondary,
  padding: '10px',
  border: `1px solid ${vars.colors.secondary}`,
  borderRadius: '4px',
});
