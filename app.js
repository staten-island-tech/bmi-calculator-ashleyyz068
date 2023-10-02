// // pass in an arguement or parameters 
// // dclare and define function
// // declared and never read means that you didn't do anything 
// function test(mess){
//     console.log(mess)
// }
// test(true);//string; passing something into a function has to be a string or valiad data tupe 
// const x ="string"; // declaring and defining a variable
// test(x)
// // int
// const y = 98;
// test(y);
// // boolean t or f
// const z =true; 
// test(z);

// function add(a,b){
//     console.log(a+b)
// }
// add(y,33)

// let a = Number(prompt("enert number"))
// let b = Number(prompt("enert another number"))

// add(a,b)
function add(x,y){
    //create an output
    return x+y
}
const sum= add(45,34)
console.log(sum);

function calc(){
    const sum = add(45,34)
    console.log(sum)
}
calc()