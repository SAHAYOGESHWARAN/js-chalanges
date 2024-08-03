function getData() {
    let data;
    setTimeout(function() {
      data = 100;
    }, 500);
    return data;
  }
  const result = getData();
  console.log(result);


  //output  undefined