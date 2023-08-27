var firstVariable = 'test';
console.dir(firstVariable);

firstVariable = 1;
console.dir(firstVariable);

if (true) {
    firstVariable = true;
    var secondVariable = false;
}
console.dir(firstVariable);
console.dir(secondVariable);

var thirdVariavle;
console.dir(thirdVariavle);

var fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
console.dir(fourthVariable);