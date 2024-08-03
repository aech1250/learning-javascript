/*
    ES6 Modules => An External file that contain reusable code
                   that can be imported into other JS files
                   Write reusable code for many different apps
                   Can conatin variables classes function... and more
                   Introduced as part of ECMAScript 2015 update

*/ 

import {PI, getArea, getCircumference, getVolume} from './mathUtil.js';

console.log(PI);

const cirecumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`Circumference: ${cirecumference.toFixed(2)} cm`);
console.log(`Area: ${area.toFixed(2)} cm^2`);
console.log(`Volume: ${volume.toFixed(2)} cm^3`);
