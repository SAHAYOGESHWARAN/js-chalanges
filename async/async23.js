async function example() {
    console.log('Start');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Middle');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('End');
  }
   
  //output

 // Start, Middle, End