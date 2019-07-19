import {
    compose,
    withProps,
    withHandlers,
    withState,
  } from 'recompose';
import React, { Fragment }  from 'react';
import template from './app.jsx';
import { getDirection } from './utils/directions';

let updateInterval = 0;
const direction = ({setDirPoint}) => async () => {
    updateInterval = setInterval(() => {
        setDirPoint(getDirection());
        console.log(getDirection());
    }, 1000);
    
}

export default compose(
    withState('direction', 'setDirection', false),
    withState('dirPoint', 'setDirPoint', { x: 0, y:0 }),
    withHandlers({ 
        direction,
    }),
  )(template);
