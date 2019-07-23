import React, { Fragment } from 'react';
import global from './index.scss';
import { OffscreenArrow } from './components';

export default ({
    direction,
    dirPoint,
}) => (
        <div>
            <div className={global.Container}>
                <OffscreenArrow label={'>'} />
            </div>
        </div>
    );
