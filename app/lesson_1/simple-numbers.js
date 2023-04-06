"use strict";

import colors from "colors";

import checkInput from "./check-input.js";
import colorizedOutput from "./colorized-output.js";

export default function simpleNumbers(start, end) {
    checkInput(start, end);

    let startPoint;

    let numbersArr = [];

    start <= 1 ? startPoint = 2 : startPoint = start;

    Loop:
        for (let i = startPoint; i < end; i++) {

            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    continue Loop;
                }
            }

            numbersArr.push(i);
        }

        numbersArr.length > 0 ? colorizedOutput(numbersArr) : console.log(colors.yellow("No prime numbers in given range"));
};
