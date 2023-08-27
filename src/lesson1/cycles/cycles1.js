const array = ['alpha', 'beta', 'delta', 'sigma', 'omega']

for (let index = 0; index < array.length; index++) {
    const departament = array[index];
    console.log(`${departament} is the best`)
}


array.forEach(departament => {
    console.log(`I love ${departament}!`)
});

for (const departament of array) {
    console.log(`${departament} is heaven!`)
}