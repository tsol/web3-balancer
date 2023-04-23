import { style } from "@vanilla-extract/css";
import { vars } from "../styles/styles.css";

export const canvas = style({
  display: 'block',
  width: '90%',
  height: '90%',
  backgroundColor: vars.colors.background,
});