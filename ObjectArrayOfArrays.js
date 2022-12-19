//Write a function, which accepts an object and returns an array of arrays of key-value pairs. In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value. Do not use the built in Object.entries() function!

const objArr = (obj) => {
  let arr = [];
  for (let elem in obj) {
    arr.push([elem, obj[elem]]);
  }
  console.log(arr);
};

let obj = { first: "Megan", last: "Divringi", isDogOwner: false };

objArr(obj);
// [["first","Megan"], ["last","Divringi"], ["isDogOwner",false]]
