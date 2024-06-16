function BMI(mass, height) {
    return ((mass) / (height ** 2));
}
console.log("---------------Test-Data-1------------------")

let markHeight = 1.69; // meter
let markWeight = 78; // kg

let MarkBmi = BMI(markWeight, markHeight);

let JohnHeight = 1.95;
let JohnWeight = 92;

let JhonBmi = BMI(JohnWeight, JohnHeight);
console.log(`Bmi of Mark : ${MarkBmi} , Jhon : ${JhonBmi}`);
let markHigherBMI = MarkBmi > JhonBmi;
console.log(markHigherBMI);
// test data 2 --

console.log("---------------Test-Data-2------------------")

markHeight = 1.88;
markWeight = 95;
JohnWeight = 85;
JohnHeight = 1.76;

JhonBmi = BMI(JohnWeight, JohnHeight);
console.log(`Bmi of Mark : ${MarkBmi} , Jhon : ${JhonBmi}`);
markHigherBMI = MarkBmi > JhonBmi;
console.log(markHigherBMI);

