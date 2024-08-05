function myFunction(arr) {
    return arr.sort((a, b) => a.b - b.b);
}

let exampleArray = [
    {a: 1, b: 2},
    {a: 2, b: 1},
    {a: 3, b: 3}
];

console.log(myFunction(exampleArray)); 




// Output: [{a: 2, b: 1}, {a: 1, b: 2}, {a: 3, b: 3}]
