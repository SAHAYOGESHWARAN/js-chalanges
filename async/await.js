
function delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
 }
  
 async function logMessageWithDelay() {
   console.log('Starting task...');
   await delay()
   console.log('Task finished!');
   console.log('Message from the end of the function.')
 }
  
 logMessageWithDelay()
 
 
 //output 
 //Starting task...
//Task finished!
//Message from the end of the function.