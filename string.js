// -------------------Check if word is present in sentence----------------------

let string = "my name is reenu nehra";
console.log(string.includes("reenu"));

// ----------Count number of vowels in sentence----------------------------

let vowels = ["a", "e", "i", "o", "u"];

function countVowel(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  console.log(count);
}
const strings = "enter a string thats called: ";
const result = countVowel(strings);
console.log(result); 

// -----------------------Remove multiple white space----------------------

let myString = "i       am        in            standard 5th ";
console.log(myString);

var newStr = myString.replace(/  +/g, " ");
console.log(newStr);

// --------------------Find if string is palindrome--------------------

function isPalindrome(stringss) {
  const lengt = stringss.length;

  for (let i = 0; i < lengt / 2; i++) {
    if (stringss[i] !== stringss[lengt - 1 - i]) {
      return "not palidrome";
    }
  }
  return "its a palindrome";
}
const stringss = "sanas";

const value = isPalindrome(stringss);

console.log(value);

// -------------------------Sort Word in alphabetical order------------

const str1 = "hey!!! my name is reenu nehra";
const words = str1.split("");

words.sort();

console.log("sorted words: ");

for (let element of words) {
  console.log(element);
}

// ------------------Find frequency of each word and letter-------------

function wordFreq(string) {
  var words = string.replace(/[.]/g, "").split(/\s/);
  var freqMap = {};
  words.forEach(function (w) {
    if (!freqMap[w]) {
      freqMap[w] = 0;
    }
    freqMap[w] += 1;
  });

  return freqMap;
}

console.log(wordFreq("i am reenu nehra and i am doing work"));

// -----------------Convert string to uppercase and lowercase alternatively after every whitespace.-------------------

function capiWords(string) {
  return string.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}
console.log(capiWords("Convert string to uppercase and lowercase alternatively after every whitespace."
  )
);

// --------------------------------------------------------------------------------------
function lowercaseWords(string) {
  return string.replace(/(?:^|\s)\S/g, function (a) {
    return a.toLowerCase();
  });
}
console.log(
  lowercaseWords(
    "Convert String To Uppercase And Lowercase Alternatively After Every Whitespace."
  )
);
