import { style } from "@vanilla-extract/css";
import { vars, text } from "@/styles/styles.css";

export const pagination = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const button = style([ text.p, style({
  backgroundColor: 'unset',
  color: vars.colors.primary,
  border: 'none',
  borderRadius: 4,
  margin: 0,
  padding: '10px 16px', 
  textTransform: 'none'
})]);

export const buttonActive = style([button, {
  backgroundColor: vars.colors.active,
  color: vars.colors.text.active
}]);

export const buttonArrow = style([button, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 10px',
  gap: '10px',
  ':disabled': {
    color: vars.colors.text.dimmed,
  }
}]);
