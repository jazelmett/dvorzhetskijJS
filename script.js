const array0 = [3, 2, 1];
const array1 = [3, 4, 2, 5];

function intersect(firstArray, secondArray) {
    return firstArray.filter(value => secondArray.includes(value));
}

console.log(intersect(array0, array1));