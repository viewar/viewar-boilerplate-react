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
                    style={{left: dirPoint.x, top: dirPoint.y, transform: 'rotate(' + dirPoint.rot + ')', display: dirPoint.display}}
                    className={styles.Direction}
                    onClick={direction}
                    label={'.'}
                />
            </div>
        </div>
    );
