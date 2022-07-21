/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

let names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

let findLongNameThatStartsWithA = names.find((elem) => {
  if(elem.startsWith('A') && elem.length > 7){
    return elem;
  }
})

let longNameThatStartsWithA = findLongNameThatStartsWithA;

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
