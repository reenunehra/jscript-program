// -----------------------Sort the array------------------------

let names = ["reenu", "jatin", "kaushik", "nehra", "dudi"];
console.log(names.sort());

//---------------------Add / Remove / Replace item in array at particular index-------------------------------


let numbers = [1, 2, "hi", "hello", "bye", 6, 7, 8, 9, 10]; // delete array element
let delnumber = numbers.splice(0, 3);
console.log(numbers);
console.log(delnumber);
// ------------------------------------------------------

let col = ["puple", "green", "blue"]; // add array element
col.splice(2, 0, "orange");
console.log(col);

//--------------------------------------------------------

let languages = ["C", "C++", "Java", "JavaScript"]; // replace array element
languages.splice(1, 1, "Python");
console.log(languages);

// -----------------------------------sum of all Element of array-----------------------

var arr = [1, 2, 3, 4, 5];

var sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// ----------Find unique number in array---------------------


let a = ["1", "1", "2","2", "3", "3", "1"];
let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);


//------------------------Find frequency of each number in array ------------
const arr5 = [2,5,7,8,5,3,5,7,8,5,3,4,2,4,2,1,6,8,6];
const getFrequency = (array) => {
   const map = {};
   array.forEach(item => {
      if(map[item]){
         map[item]++;
      }else{
         map[item] = 1;
      }
   });
   return map;
};
console.log(getFrequency(arr5));