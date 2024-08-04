function delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
 }
  
 async function func() {
    await delay();
    console.log('I am asynchronous and return a promise');
 }