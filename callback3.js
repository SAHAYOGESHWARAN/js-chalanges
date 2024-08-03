function logResult(result) {
    console.log(result);
  }
  function multiply(a, b, callback) {
    const result = a * b;
    callback(result);
  }
  multiply(2, 3, logResult);



  //output 6