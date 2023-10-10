
let userName = prompt("Enter your name:");
let userWeight = Number(prompt("Enter your weight in kilograms:"));
let userHeight = Number(prompt("Enter your height in centimeters:"));
function BMI() {
    return (userWeight / (Math.pow(userHeight / 100),2));
}
const bmi = BMI();

console.log("Your BMI is " + bmi)

function health(x) {
    if (x < 18.5) {
        console.log("You are  underweight")
    }
    else if (x >= 18.5 && x < 24.9) {
        console.log("You are within the healthy weight range")
    }
    else {
        console.log("You are in the unhealthy weight range")
    }

}
health(bmi)
