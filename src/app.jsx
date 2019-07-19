import React, { Fragment } from 'react';
import styles from './index.scss';
import { TextButton } from './components';

export default ({
    direction,
    dirPoint,
}) => (
        <div>
            <div className={styles.Container}>
                <TextButton
                    style={{bottom: dirPoint.x + 'px', left: dirPoint.y + 'px'}}
                    className={styles.Direction}
                    onClick={direction}
                    label={'Direction'}
                />
            </div>
        </div>
    );
