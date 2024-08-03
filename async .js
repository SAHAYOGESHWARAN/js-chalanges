function func() {
    console.log('Hello!');
   }
   setTimeout(func, 3000);
   console.log('Another log message.');


   //output
   // Another log message.
   // Hello!