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
                    style={{bottom: dirPoint.x + 'px', left: dirPoint.y + 'px', transform: 'rotate(' + dirPoint.rot + 'deg)'}}
                    className={styles.Direction}
                    onClick={direction}
                    label={'<--'}
                />
            </div>
        </div>
    );
