import React, { Fragment } from 'react';
import styles from './index.scss';
import { TextButton } from './components';

export default ({
    getDirection,
}) => (
<div className={styles.Container}>
    <TextButton
      className={styles.RightTop}
      onClick={getDirection}
      label={'Direction'}
    />
</div>
);
