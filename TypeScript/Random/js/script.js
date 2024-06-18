"use strict";
function countEvenNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
const limit = 100;
countEvenNumbers(limit);
