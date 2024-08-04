function myFunction(a, b) {
    return a.filter(element => element !== b);
}


console.log(myFunction([1, 2, 3, 4, 2], 2)); 


// [1, 3, 4]
