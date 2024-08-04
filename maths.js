function myFunction(a, b, c, d, e, f) {
    // Sum a and b
    let result = a + b;
    // Subtract c
    result = result - c;
    // Multiply by d
    result = result * d;
    // Divide by e
    result = result / e;
    // Raise to the power of f
    result = Math.pow(result, f);
    return result;
}


console.log(myFunction(1, 2, 3, 4, 5, 6));




// Output depends on the calculation: ((1 + 2 - 3) * 4 / 5) ^ 6

