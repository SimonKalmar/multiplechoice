'use strict';
/**
 * nQuery, *the* JS Framework
 */
const $ = function (foo) {
    return document.getElementById(foo);    // save keystrokes
}

/*
 * animation pack
 * requires:
 * @param arr: array of objects to be animated, must have move and draw
 * @param onoff: variable for suspending animation
 * @param: delay, number of millisecs between displays
 * Canvas module with prep and clear
 */
    const animate = function(arr, onoff, delay) {
        onoff = setInterval(function() {
            if (arr.length < 1) {
                return;
            }
            arr[0].cv.clear();
            arr[0].cv.prep();
            for (let obj of arr) {
                obj.move();
                obj.draw();
            }
        }, delay);
    }

export {$, animate};
