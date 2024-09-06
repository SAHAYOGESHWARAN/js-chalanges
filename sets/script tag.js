const numbers = [5,8,3,4,2,9,1,7];

const sum  = numbers.reduce((accumulator,currentvalue) =>{
    return accumulator + currentvalue;
})


console.log(sum);