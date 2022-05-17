// Find the largest number among three number---------------------------

// take input from user

let user1 = 5;
let user2 = 10;
let user3 = 15;

console.log(user1, user2, user3);
if (user1 >= user2) {
  console.log("user1 is greater");
} else if (user2 >= user3) {
  console.log("user2 is greater");
} else {
  console.log("user3 is greater");
}

// Find the sum of digits--------------------------

let number = 23;
let sum1 = 0;
while (number) {
  sum1 = sum1 + (number % 10);
  number = Math.floor(number / 10);
}

console.log(`sum of digit is ${sum1}`);

// ----------------------------------------------
let no = 1112;
sumDigit = 0;
while (no) {
  sumDigit = sumDigit + (no % 10);
  no = no / 10;
}
console.log("sum of 1112 is: ", sumDigit);

// ---------Find the reverse of any number---------------------------------

let num = 1234;
let rev = 0;
let lastNum;

while (num != 0) {
  lastNum = num % 10;
  rev = rev * 10 + lastNum;
  num = Math.floor(num / 10);
}
console.log(rev);

// ---------------------------------------

// number is not equal to 0
// number % 10
// multiplication of reverse
// num is devided by 10

let numbers = 987654321;
let reverse = 0;
let lstDig;

while (numbers != 0) {
  lstDig = numbers % 10;
  reverse = reverse * 10 + lstDig;
  numbers = Math.floor(numbers / 10);
}
console.log(reverse);

// -----------------Find the HCF and LCM of 5 Numbers--------------------------- revise


// -------------Convert temperatures in degrees Fahrenheit to Celsius----------------------------------------------

function fahrenToCels() {
  fahrenheit = 106;
  let fTemp = fahrenheit;
  let faToCe = ((fTemp - 32) * 5) / 9;
  var answer = fTemp + "is" + faToCe;
  console.log(answer);
}

fahrenToCels(45);

// ------------------------Check if contact Number and Email is valid-----------------------------

function validateEmail(emailAddress , phoneNo)
{
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexPhoneNo = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(emailAddress.match(regexEmail) && phoneNo.match(regexPhoneNo)){

        return "email and phone is valid ";
    }else{
        return "email and phone is Not-valid ";
    }
}

let emailAddress = "reenunehra123501@gmail.com";
let phoneNo = "1234543676"
console.log(validateEmail(emailAddress, phoneNo));



// --Given an amount, find the minimum number of notes of different denominations that sum upto the given amount------------------- revise
 
let sum = 512;
const countNotes = sum => {
   let count = 0;
   while(sum){
      if(sum >= 1000){
         sum -= 1000;
         count++;
         continue;
      }else if(sum >= 500){
         sum -= 500;
         count++;
         continue;
      }else if(sum >= 100){
         sum -= 100;
         count++;
         continue;
      }else if(sum >= 50){
         sum -= 50;
         count++;
         continue;
      }else if(sum >= 20){
         sum -= 20;
         count++;
         continue;
      }else if(sum >= 10){
         sum -= 10;
         count++;
         continue;
      }else if(sum >= 5){
         sum -= 5;
         count++;
         continue;
      }else if(sum >= 2){
         sum -= 2;
         count++;
         continue;
      }else{
         sum -= 1;
         count++;
         continue;
      }
   };
   return count;
};
console.log(countNotes(sum));
