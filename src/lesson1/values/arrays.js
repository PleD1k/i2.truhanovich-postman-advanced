const array = [1, "2", [3], {key: 'value'}];
const testKey = 'key';

// console.log(array.lenght);
// console.log(array[0] === 1);
// console.log(array[2][0] === 3);
// console.log(array[3]['key'] === 'value');
// console.log(array[3][testKey] === 'value');

console.log(array);
array.push(5);
console.log(array);
console.log(array.pop());
console.log(array);
array.unshift('zero')
console.log(array);
console.log(array.shift());
console.log(array);