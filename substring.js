function myFunction(a) {
    const halfLength = Math.ceil(a.length / 2);
    return a.substring(0, halfLength); 
}

console.log(myFunction("hello")); // "hel"
