firstVariable = 'test';
console.dir(firstVariable);

firstVariable = 1;
console.dir(firstVariable);

if (true) {
    firstVariable = true;
    secondVariable = false;
}
console.dir(firstVariable);
console.dir(secondVariable);

// thirdVariavle;
// console.dir(thirdVariavle);

fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
console.dir(fourthVariable);