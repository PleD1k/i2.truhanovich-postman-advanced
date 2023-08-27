const firstVariable = 'test';
console.dir(firstVariable);

firstVariable = 1;
console.dir(firstVariable);

if (true) {
    firstVariable = true;
    const secondVariable = false;
}
console.dir(firstVariable);
console.dir(secondVariable);

const thirdVariavle;
console.dir(thirdVariavle);

const fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
console.dir(fourthVariable);

const test = {};
const test2 = test;
test.key = 1;
console.log(test);