import {
    compose,
    withProps,
  } from 'recompose';
import React, { Fragment }  from 'react';
import template from './app.jsx';
import { getDirection } from './utils/directions';

export default compose(
    withProps({
        getDirection,
    })
  )(template);
