function myFunction(a, b) {
    return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

let array1 = [3, 1, 2, 3];
let array2 = [4, 2, 5, 1];
console.log(myFunction(array1, array2)); 
// Output: [1, 2, 3, 4, 5]
