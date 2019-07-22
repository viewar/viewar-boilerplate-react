// directions util: input a point in space 
// if this point is not visible on screen:
// return a screen coordinate in percent of screen dimension at the edge of the screen
// and the rotation of the axis from screen center to the screen coordinate
// and a css display attribute

import viewarApi from 'viewar-api';

export const getDirection = async ( xCoord, yCoord, zCoord ) => {
    let screen;
    if(viewarApi.tracker) {
        screen = await viewarApi.coreInterface.call('getScreenSpaceCoordinates', JSON.stringify([ { x: xCoord, y: yCoord, z: zCoord }]));
    }
    if ((!screen) || screen[0].x === 'undefined' || screen[0].x === 'null' || screen[0].y === 'undefined' || screen[0].y === 'null') {
        return { x: 0, y: 0, rot: 0, display: 'none'};
    }
    // screen coords range from 0 to 1
    if (screen[0].x > 0 && screen[0].x < 1 && screen[0].y > 0 && screen[0].y < 1) {
        return { x: 0, y: 0, rot: 0, display: 'none'};
    }

    const percent = 100;
    const offset = percent/2; // distance from screen edge to center of screen
    let x0, y0, xScale, yScale, x1, y1, rad;
    // calculate distance of screen point to center
    x0 = screen[0].x * percent - offset;
    y0 = screen[0].y * percent - offset;
    if (x0 && y0) {
        // scale so point x is on screen edge
        xScale = offset/Math.abs(x0);
        y1 = y0 * xScale;
        x1 = x0 * xScale;
        if (Math.abs(y1) > offset) {
            // if y exceeds the screen edge scale down again
            yScale = offset/Math.abs(y1);
            y1 > offset ? y1 = offset : y1 = offset * (-1);
            x1 = x1 * yScale;
        }
    }
    if (x0 === 0 && y0 >= offset) { x1 = 0; y1 = offset; }
    if (x0 === 0 && y0 < offset) { x1 = 0; y1 = offset * (-1); }
    if (x0 >= offset && y0 === 0) { x1 = offset; y1 = 0; }
    if (x0 < offset && y0 === 0) { x1 = offset * (-1); y1 = 0; }
    rad = Math.atan2(y1, x1);
    return { x: (x1 + offset) + '%', y: (y1 + offset) + '%', rot: rad + 'rad', display: 'block'};

}
