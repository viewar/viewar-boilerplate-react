// directions util: input a screen coordinate outside of the screen, 
// get the nearest point at the edge of the screen
import viewarApi from 'viewar-api';

const COORD = 1.0;

export const getDirection = async () => {
    const screen = await viewarApi.coreInterface.call('getScreenSpaceCoordinates', JSON.stringify([ { x: COORD, y: COORD, z: COORD }]));
    if ((!screen) || screen[0].x === 'undefined' || screen[0].x === 'null' || screen[0].y === 'undefined' || screen[0].y === 'null') {
        return { x: 0, y: 0, rot: 0, display: 'none'};
    }
    if (screen[0].x > 0 && screen[0].x < 1 && screen[0].y > 0 && screen[0].y < 1) {
        return { x: 0, y: 0, rot: 0, display: 'none'};
    }

    const OFFSET = 0.5; // distance from screen edge to center of screen
    let x0, y0, xScale, yScale, x1, y1, rad;
    // calculate distance of screen point to center
    x0 = screen[0].x - OFFSET;
    y0 = screen[0].y - OFFSET;
    rad = 0; // remove
    if (x0 && y0) {
        // scale so point x is on screen edge
        xScale = OFFSET/Math.abs(x0);
        y1 = y0 * xScale;
        x1 = x0 * xScale;
        if (Math.abs(y1) > OFFSET) {
            // if y exceeds the screen edge scale down again
            yScale = OFFSET/Math.abs(y1);
            y1 > OFFSET ? y1 = OFFSET : y1 = OFFSET * (-1);
            x1 = x1 * yScale;
        }
        rad = Math.atan2(y1, x1);
    } 
    if (x0 === 0 && y0 >= OFFSET) { x1 = 0; y1 = OFFSET; }
    if (x0 === 0 && y0 < OFFSET) { x1 = 0; y1 = OFFSET * (-1); }
    if (y0 === 0 && x0 >= OFFSET) { x1 = OFFSET; y1 = 0; }
    if (y0 === 0 && x0 < OFFSET) { x1 = OFFSET * (-1); y1 = 0; }
    rad = Math.atan2(y1, x1);
    return { x: (x1 + OFFSET) * 95 + '%', y: (y1 + OFFSET) * 95 + '%', rot: rad + 'rad', display: 'block'};

}
