/*
There are 2 arrays: "names1" and "names2". Create a function that:
- returns array, that has names from array names1 excluding names from array names2
*/

const names1 = ['Anastasia', 'Svetlana', 'Nikita', 'Viktar', 'Egor'];
const names2 = ['Svetlana', 'Egor', 'Nikita'];

// // update only this function
// function findInterception(arr1, arr2) {
//   return [];
// }

function findInterception(arr1, arr2) {
  return arr1.filter(name => !arr2.includes(name));
}

const result = findInterception(names1, names2);
console.log(result);