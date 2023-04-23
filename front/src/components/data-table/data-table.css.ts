import { GlobalStyleRule, style } from "@vanilla-extract/css";
import { vars } from "@/styles/styles.css";


export const table = style({

  backgroundColor: vars.colors.contrast,

  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.12)',
  borderRadius: '8px',

  borderCollapse: 'collapse',
  overflow: 'hidden',
  width: '100%'
});

export const row = style({
  flex: 'none',
  order: '0',
  alignSelf: 'stretch',
  flexGrow: '0',
});

export const loadingDiv= style({
  display: 'flex',
  justifyContent: 'center',
  margin: '20px auto',
});

const th: GlobalStyleRule = {
  textAlign: 'left',
  padding: '0 6px',
  height: '48px',
  background: vars.colors.background2,
  borderBottom: `1px solid ${vars.colors.border}`,
  flex: 'none',
  order: '0',
  flexGrow: '0',
};

const td: GlobalStyleRule = {
  ... th,
  background: vars.colors.contrast,
}

export const headerCell = style(th);
export const dataCell = style(td);

export const checkboxHeaderCell = style({ ... th,  width: 0 });
export const checkboxDataCell = style({ ... td, width: 0 });

export const actionHeaderCell = style({
  ... th,
  width: 0,
  textAlign: 'right',
});

export const actionDataCell = style({
  ... td,
  paddingRight: '10px',
  width: 0,
  textAlign: 'right',
});

export const checkbox = style({
  width: '16px',
  height: '16px',
  background: vars.colors.background,
  border: `1px solid ${vars.colors.inputBorder}`,
  borderRadius: '4px',
  flex: 'none',
  order: '0',
  flexGrow: '0',
});

export const pagination = style({
  margin: 0,
  padding: '8px 0'
});



