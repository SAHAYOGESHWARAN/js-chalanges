function myFunction(obj, key) {
    return obj[key];
}

let exampleObject = { 'prop-1': 'value1', 'prop-2': 'value2' };
console.log(myFunction(exampleObject, 'prop-1')); // Output: "value1"
console.log(myFunction(exampleObject, 'prop-2')); // Output: "value2"
