import { compose, withState, withHandlers, lifecycle } from 'recompose';

import OffscreenArrow from './offscreen-arrow.jsx';
import { getDirection } from '../../utils/directions';

const refresh = 25; // ms

let updateInterval = 0;
const direction = ({ setDirPoint }) => async () => {
  updateInterval = setInterval(async () => {
    setDirPoint(await getDirection(0, 0, 0));
  }, refresh);
};

export default compose(
  withState('direction', 'setDirection', false),
  withState('dirPoint', 'setDirPoint', { x: 0, y: 0, rot: 0, display: 'none' }),
  withHandlers({
    direction,
  }),
  lifecycle({
    componentDidMount() {
      this.props.direction();
    },
    componentWillUnmount() {},
  })
)(OffscreenArrow);
