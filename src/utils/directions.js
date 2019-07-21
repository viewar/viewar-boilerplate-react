// directions util: input a screen coordinate outside of the screen, 
// get the nearest point at the edge of the screen
import viewarApi from 'viewar-api';

const COORD = 1.0;

export const getDirection = async () => {
    const screen = await viewarApi.coreInterface.call('getScreenSpaceCoordinates', JSON.stringify([ { x: COORD, y: COORD, z: COORD }]));
    let disp = 'none';
    if (screen[0].x > 0 && screen[0].x < 1 && screen[0].y > 0 && screen[0].y < 1) {
        disp = 'block'; 
    }

    let x0, y0, xScale, yScale, x1, y1;
    const OFFSET = 0.5; // distance from screen edge to center of screen
    if (screen[0].x - OFFSET && screen[0].y - OFFSET) {
        // calculate distance of screen point to center
        x0 = screen[0].x - OFFSET;
        y0 = screen[0].y - OFFSET;
        // scale so point x is on screen edge
        xScale = OFFSET/Math.abs(x0);
        y1 = y0 * xScale;
        x1 = x0 * xScale;
        if(Math.abs(y1) > OFFSET) {
            // if y exceeds the screen edge scale down again
            yScale = OFFSET/Math.abs(y1);
            y1 > OFFSET ? y1 = OFFSET : y1 = OFFSET * (-1);
            x1 = x1 * yScale;
        }
    } else {
        x1 = 0;
        y1 = 0;
    }
    // console.log('disp', disp);
    disp = 'block';  // TODO: remove
    // return screen ? { x: screen[0].x * 100  + '%', y: screen[0].y * 100 + '%', rot: 0 + 'deg', display: disp} : null;
    // return screen ? { x: (x1 + offset - 0.05) * 100 + '%', y: (y1 + offset) * 100  + '%', rot: 0 + 'deg', display: disp} : 'block';
    return screen ? { x: (x1 + OFFSET) * 95 + '%', y: (y1 + OFFSET) * 95  + '%', rot: 0 + 'deg', display: disp} : 'block';

}
