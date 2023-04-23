import React, { useLayoutEffect } from 'react';
import { initWorld, onDestroy } from '../plugins/shapes';
import * as styles from './shapes.css';

const Shapes: React.FC = () => {
  
  useLayoutEffect(() => {
    initWorld();
    return () => {
      onDestroy();
    };
  }, []);

  return <canvas className={styles.canvas} id="myCanvas"></canvas>;

}

export default Shapes;