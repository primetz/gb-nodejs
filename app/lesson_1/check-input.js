"use strict";

export default function checkInput(start, end) {
    if (isNaN(start) || isNaN(end)) {
        throw new Error("Invalid arguments");
    }
};
