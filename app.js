// My age in human years
let myAge = 25;

// Value will change soon
let earlyYears = 2;
earlyYears *= 10.5;

// Years in dog equivalence
let laterYears = myAge - 2;

// Numbers of dogs year by 4
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Summation of human and dog years
let myAgeInDogYears = earlyYears + laterYears;

// My name is lower case
let myName = 'CYRIL'.toLowerCase();

// Output in a sentence form
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)