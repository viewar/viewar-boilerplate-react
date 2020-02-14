/* eslint-disable no-console */
import {
  compose, withState, withHandlers, lifecycle, withPropsOnChange, // TODO: use setPropTypes
} from 'recompose';

import PlaceMarker from './place-marker.jsx';
import { getScreenSpaceCoordinates } from '../../utils';

const refresh = 132; // ms

let updateInterval = 0;

const updatePoiPosition = ({ setPoiPosition, xPos, yPos, zPos }) => async () => {
  setPoiPosition(await getScreenSpaceCoordinates(xPos, yPos, zPos));
};

const withPositionState = withState('positionState', 'setPositionState', {
  x: 0,
  y: 0,
  z: 0,
});

const withPoiPositionState = withState('poiPosition', 'setPoiPosition', {
  x:       0,
  y:       0,
  display: 'block',
});

export default compose(
  withState('direction', 'setDirection', false),
  withState('xPos', 'setXPos', 0),
  withState('yPos', 'setYPos', 0),
  withState('zPos', 'setZPos', 0),
  withPositionState,
  withPoiPositionState,
  withHandlers({
    updatePoiPosition,
  }),
  withPropsOnChange([ 'position' ], async ({ setPositionState, position }) => {
    setPositionState(position);
  }),
  lifecycle({
    componentDidMount() {
      updateInterval = setInterval(this.props.updatePoiPosition, refresh);
    },
    componentWillUnmount() {
      clearInterval(updateInterval);
    },
  })
)(PlaceMarker);
