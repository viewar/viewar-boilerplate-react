import React, { Fragment } from 'react';
import global from './index.scss';
import { OffscreenArrow } from './components';

export default ({
    direction,
    dirPoint,
}) => (
        <div>
            <div className={global.Container}>
                <div className={global.ArrowMargin}>
                    <OffscreenArrow
                        style={{ left: dirPoint.x, top: dirPoint.y, transform: 'rotate(' + dirPoint.rot + ')', display: dirPoint.display }}
                        className={global.Arrow}
                        label={'>'}
                    />
                </div>
            </div>
        </div>
    );
