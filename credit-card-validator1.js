// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(ccNum) {
  // Copy Array, pull out test digit, reverse array
  let cardArr = ccNum;
  let testDigit = cardArr.pop();
  cardArr.reverse();
  //console.log('Test Digit is: ' + testDigit);
  //console.log('Card Array: ' + cardArr);
  const finalArr = [];
  // Push only odd Numbers and double; ensure single digit
  if (cardArr.length < 15) {
       for (let i = 0; i <= cardArr.length - 2; i +=2) {
      let doubleNum = cardArr[i] * 2;
      console.log('Number in 1st sequence is ' +cardArr[i] + ': ' + doubleNum);
      if (doubleNum > 9) {
        finalArr.push(doubleNum - 9);
      } else {
      finalArr.push(doubleNum);
      }
    }
  } else {
    for (let i = 0; i <= cardArr.length; i +=2) {
      let doubleNum = cardArr[i] * 2;
      console.log('Number in 1st sequence is ' +cardArr[i] + ': ' + doubleNum);
      if (doubleNum > 9) {
        finalArr.push(doubleNum - 9);
      } else {
      finalArr.push(doubleNum);
      }
    }
  }

  for (let x = 1; x <= cardArr.length - 1; x +=2) {
    console.log('Number for 2nd sequence is ' + cardArr[x]);
    finalArr.push(cardArr[x]);
  }
  // combine Array into a single sum total
  console.log(finalArr);
  let totalSum = 0;
  for (let i = 0; i < finalArr.length; i++) {
  totalSum += finalArr[i] };
  console.log('Total sum is ' + totalSum);

// Give true/false if card is Valid or Not
  if (10 - totalSum % 10 === testDigit) {
    console.log('Credit Card number is validated.');
    return true;
  } else {
    console.log('Credit Card Number is NOT valid.');
    return false;
  }
console.log(`Total Sum: ${10 - totalSum % 10}`);
console.log('Test Digit: ' + testDigit);
};
// call Function to validate Card
//validateCred(valid3);

// Still issue if credit card is NOT 16 digits long...!!

console.log('\n-----------------------------------------------------\n');

//2# Function - Use Array of Cards and sort to an array as Valid or No
function findInvalidCards(arr) {
  let invalidArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!validateCred(arr[i])) {
    invalidArr.push(arr[i].reverse());
    console.log(arr[i] + ' is NOT a valid Credit Card Number.');
    } else {
     console.log(arr[i].reverse() + ' is Valid.');
    }
  }
  return invalidArr;
  console.log(invalidArr);
};
// Call Function
let invalidArray = findInvalidCards(batch);
console.log(invalidArray);

console.log('\n-----------------------------------------------------\n');
//3# Function - Determine Card Issue via card Number
function idInvalidCardCompanies(arr) {
  cardIssueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 3) {
      cardIssueArr.push(' 3 - Amex');
    } else if (arr[i][0] === 4) {
      cardIssueArr.push(' 4 - Visa');
    } else if (arr[i][0] === 5) {
      cardIssueArr.push(' 5 - Mastercard');
    } else if (arr[i][0] === 6) {
      cardIssueArr.push(' 6 - Discover');
    } else {
      cardIssueArr.push('Company Not Found');
    }
  }
  console.log(cardIssueArr);
  let sortedArr = [...new Set(cardIssueArr)];
  console.log('These were the invalid Card Issuers: ' + sortedArr);
};

// calling Function for #3
idInvalidCardCompanies(batch);


//