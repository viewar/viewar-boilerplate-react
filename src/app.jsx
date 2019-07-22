import React, { Fragment } from 'react';
import styles from './index.scss';
import { OffscreenArrow } from './components';

export default ({
    direction,
    dirPoint,
}) => (
        <div>
            <div className={styles.Container}>
                <div className={styles.ArrowMargin}>
                    <OffscreenArrow
                        style={{ left: dirPoint.x, top: dirPoint.y, transform: 'rotate(' + dirPoint.rot + ')', display: dirPoint.display }}
                        className={styles.Arrow}
                        onClick={direction}
                        label={'>'}
                    />
                </div>
            </div>
        </div>
    );
