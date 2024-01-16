"use strict";
console.log("Hello this is new ts variable proj");
//exercise 2
let PersonName1 = "Hello";
// const PersonAge: number = 50;
let PersonAge = 50;
var isStudent = false;
let Person_Number = "1";
let PersonName = "My Name is Faraz";
PersonAge = 60;
isStudent = true;
console.log(PersonAge);
console.log(PersonName);
console.log(isStudent);
console.log(PersonAge + Person_Number);
let message = ` ${PersonName1}, ${PersonName} What is thi`;
console.log(message);
// exercise 3
//Name Cases: Store a person's Name in a veriable, and then print theat person's name in lowercse, upercase and titilecase.
let lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);
let uppercaseName = PersonName.toUpperCase();
//upercase
console.log(uppercaseName); // titlecase name
let word = lowercaseName.split(" ");
let titleCasename = "";
for (let i = 0; i < word.length; i++) {
    titleCasename += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
console.log(titleCasename);
//exercise 4
//Quid E azam once said, "expect the best, prepare for the worst"
console.log('Quid E azam once said, "expect the best, prepare for the worst"');
//exercise 5
//Quid E azam once said, "expect the best, prepare for the worst"
let messAge = '"expect the best, prepare for the worst"';
let quid = "Quid E azam once said";
console.log(`${quid}  ${messAge}`);
let famousePerson = "Quid e Azam";
let messaGe = famousePerson + 'once said, "expect the best, prepare for the worst"';
console.log(messaGe);
