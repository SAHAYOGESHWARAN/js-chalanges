function delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
 }
  
 async function func() {
    await delay();
    console.log('Promise resolved!');
 }
 func()
 console.log('I am not blocked');
 
 
 //output
 //I am not blocked
//Promise resolved!