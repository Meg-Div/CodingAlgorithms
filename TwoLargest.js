//Write a function that takes an array of numbers as its argument and returns the two highest numbers within the array.
//The returned value should be an array in the following format: [secondHighest, highest] The order of the numbers passed in could be any order.
//Do not use the build in sort() method

const sortify = (arr) => {
  largest = arr.reduce((a, b) => Math.max(a, b));
  arr.splice(arr.indexOf(largest), 1);
  secondLargest = arr.reduce((a, b) => Math.max(a, b));
  console.log([secondLargest, largest]);
};

sortify([1, 2, 9, 6, 3, 4, 5]); //[6,9];
