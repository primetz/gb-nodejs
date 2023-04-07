"use strict";

import colors from "colors";

import simpleNumbers from "./simple-numbers.js";

let [start, end] = process.argv.slice(2);

start = parseInt(start, 10);
end = parseInt(end, 10);

try {
    simpleNumbers(start, end);
} catch (e) {
    console.log(colors.red(e.message));
}
