const user = {

}
let a = Number(prompt("Enter your weight in pounds:"))
let b = Number(prompt("Enter your height in inches"))
function BMI(){
    return(a/b);
}
console.log("Your BMI is " + BMI())