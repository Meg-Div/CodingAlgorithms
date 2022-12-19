// node ArrayOfStringCapitals.js
//Write a function, which accepts an array of strings and returns the total number of capitals in each of the strings.
//Do not convert the array into a string.

const caps = (strs) => {
  count = 0;
  for (let str of strs) {
    count += str.replace(/[a-z]/g, "").length;
  }
  console.log(count);
};

caps(["Moon", "oVer", "MiHammI"]);
caps(["Paul", "George", "Ringo"]);
caps(["hello", "world"]);
