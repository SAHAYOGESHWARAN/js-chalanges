
function myFunction( a ) {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
  }


console.log(myFunction(12345));



//output
//[ 1, 2, 3, 4, 5 ]