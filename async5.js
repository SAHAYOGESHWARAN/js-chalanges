let i = 0;
function func() {
 i = 2;
 console.log(i);
}
setTimeout(func, 0);
console.log(i);


//output 
//0
//2