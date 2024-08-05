function myFunction(...arrays) {
    return arrays.flat();
}


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];
console.log(myFunction(array1, array2, array3)); 



// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
