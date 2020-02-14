import React, { Fragment } from 'react';
import global from './index.scss';
import { OffscreenArrow, PlaceMarker } from './components';

export default ({
    direction,
    dirPoint,
}) => (
        <div>
            <div className={global.Container}>
                {/* <OffscreenArrow label={'>'} /> */}
                <PlaceMarker xPos={0} yPos={0} yPos={0} label={'*'} />
            </div>
        </div>
    );
