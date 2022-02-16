// function calculate_age(dob) {
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms);

//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// console.log(calculate_age(new Date(1982, 11, 4)));

// console.log(calculate_age(new Date(1962, 1, 1)));

// function ageCalkulator(birth_year, current_year) {
//     var current_year = getFullYear();
//     var birth_year = 1990;
//     return Math.abs((getFullyear) - 1990);


// }
// ageCalkulator()

// function ageCalculator(birthYear, currentYear) {
//     return currentYear - birthYear;
// }
// const currentdate = new Date();
// const currentYear = new Date();
// console.log("You are either " + (ageCalculator(1993, currentdate.getFullYear()) + " or " + (ageCalculator(1994, currentYear.getFullYear()))))

const age = (birthYear, currentYear) => {
    return currentYear - birthYear;
}
const currentYear = new Date();

console.log(age(1990, currentYear.getFullYear()));

console.log(age(1997, currentYear.getFullYear()));