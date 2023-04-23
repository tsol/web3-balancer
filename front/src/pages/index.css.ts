import { style } from "@vanilla-extract/css";

export const title = style({
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '40px',
  lineHeight: '120%'
});

export const contentBody = style({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 600px)': {
      flexDirection: 'column',
      height: '100%'
    },
  },
});

export const contentLeft = style({
  flex: 1,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  // backgroundColor: 'blue'  
});

export const contentRight = style({
  flex: 1,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
  // backgroundColor: 'green'
});

