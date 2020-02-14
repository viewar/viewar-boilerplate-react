import React from 'react';
import cx from 'classnames';

import styles from './place-marker.scss';
import global from '../../global/global.scss';
// import { Icon } from '../';

const PlaceMarker =  ({
  poiPosition, label, xPos , yPos, zPos
}) => (
  <div data-testid='PlaceMarker' className={cx(styles.placeContainer)}>
    <div
      className={cx(
        global.DefaultTextFont,
        global.DefaultTextColor,
        styles.placeMarker
      )}
      style={{
        left:            poiPosition.x,
        top:             poiPosition.y,
        display:         poiPosition.display,
      }}
    >
{/*       <Icon
        className={cx(global.ButtonBaseColor)}
        datatestid="place-marker"
        icon="pin"
        size="small"
      /> */}
      <div className={cx(global.TitleFont, styles.label)}>{label + xPos + ',' + yPos + ',' + zPos}</div>
    </div>
  </div>
);

export default PlaceMarker;
