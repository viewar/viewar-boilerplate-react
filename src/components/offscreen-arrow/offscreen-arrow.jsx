import React from 'react';
import cx from 'classnames';

import styles from './offscreen-arrow.scss';

export default ({ label, dirPoint }) => (
  <div className={cx(styles.ArrowMargin)}>
    <div
      className={cx(styles.Arrow)}
      style={{
        left: dirPoint.x,
        top: dirPoint.y,
        transform: 'rotate(' + dirPoint.rot + ')',
        display: dirPoint.display,
      }}
    >
      {label}
    </div>
  </div>
);
