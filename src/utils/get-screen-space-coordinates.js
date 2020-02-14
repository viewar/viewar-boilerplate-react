/* eslint-disable no-console */
// getScreenSpaceCoordinates util: input a point in space
// get a screen coordinate in percent of screen dimension
// and a css display attribute

import viewarApi from 'viewar-api';

export default async function(xCoord, yCoord, zCoord) {
  let screen;
  if (viewarApi.tracker) {
    screen = await viewarApi.coreInterface.call(
      'getScreenSpaceCoordinates',
      JSON.stringify([{
        x: xCoord,
        y: yCoord,
        z: zCoord,
      }])
    );
  }
  if (
    !screen ||
    screen[0].x === 'undefined' ||
    screen[0].x === 'null' ||
    screen[0].y === 'undefined' ||
    screen[0].y === 'null'
  ) {
    return {
      x:       0,
      y:       0,
      rot:     0,
      display: 'none',
    };
  }

  const percent = 100;
  const offset = percent / 2; // distance from screen edge to center of screen
  let x0, y0;
  // calculate distance of screen point to center
  x0 = screen[0].x * percent - offset;
  y0 = screen[0].y * percent - offset;
  return {
    x:       x0 + offset + '%',
    y:       y0 + offset + '%',
    display: 'block',
  };
}
