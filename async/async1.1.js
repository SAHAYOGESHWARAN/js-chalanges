async function example() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Done');
  }
   
  console.log('Start');
  example();
  console.log('End');
   

  //output
  //start
//End
//Done