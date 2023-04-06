"use strict";

import colors from "colors";

export default function colorizedOutput(num) {
    let index = 0;

    num.forEach(n => {
        switch (index) {
            case 0:
                console.log(colors.green(n));
                break;
            case 1:
                console.log(colors.yellow(n));
                break;
            default:
                console.log(colors.red(n));
        }
        index !== 2 ? index++ : index = 0;
    });
};
