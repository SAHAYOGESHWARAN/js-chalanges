function myFunction(obj) {
    return obj['prop-2'];
}


let exampleObject = { 'prop-1': 'value1', 'prop-2': 'value2' };
console.log(myFunction(exampleObject)); 


// Output: "value2"
