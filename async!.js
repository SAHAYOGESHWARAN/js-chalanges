function delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
 }
  
 function logMessageWithDelay() {
   console.log('Starting task...');
   delay()
     .then(() => {
       console.log('Task finished!');
     });
   console.log('Message from the end of the function.')
 }
  
 logMessageWithDelay()


 //output 
 //Starting task...
//Message from the end of the function.
//Task finished!
