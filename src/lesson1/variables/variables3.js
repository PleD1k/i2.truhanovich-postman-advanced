let firstVariable = 'test';
console.dir(firstVariable);

firstVariable = 1;
console.dir(firstVariable);

if (true) {
    firstVariable = true;
    let secondVariable = false;
}
console.dir(firstVariable);
// console.dir(secondVariable);

let thirdVariavle;
console.dir(thirdVariavle);

let fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
console.dir(fourthVariable);