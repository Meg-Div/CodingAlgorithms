//Write a function, which accepts an object and returns an array of all of the values in the object. Do not use the built in Object.values() function!

const values = (obj) => {
  arr = [];
  for (let elem in obj) {
    arr.push(obj[elem]);
  }
  console.log(arr);
};

const values2 = (obj) => {
  arr = [];
  for (let [key, value] of Object.entries(obj)) {
    arr.push(value);
  }
  console.log(arr);
};

let obj = { first: "Megan", last: "Divringi", isDogOwner: false };
values(obj); // ["Megan", "Divringi", false]
value2(obj); // ["Megan", "Divringi", false]
