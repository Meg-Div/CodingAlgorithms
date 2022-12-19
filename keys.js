//Write a function, which accepts an object and returns an array of all of the keys in the object. Do not use the built in Object.keys() function!

const keys = () => {
  arr = [];
  for (let elem in obj) {
    arr.push(elem);
  }
  console.log(arr);
};

let obj = { a: 1, b: 2, c: 3 };
keys(obj); // ["a", "b", "c"]
