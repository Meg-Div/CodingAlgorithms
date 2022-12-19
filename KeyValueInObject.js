//Write a function which takes an array of objects and the name of a key. The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

const keys = (objArr, k) => {
  let arr = [];
  for (let obj of objArr) {
    for (let [key, value] of Object.entries(obj)) {
      if (key === k) {
        arr.push(value);
      }
    }
  }
  console.log(arr);
};

keys(
  [
    { name: "George" },
    { name: "Paul" },
    { name: "Ringo" },
    { Lastname: "James" },
  ],
  "name"
);
// ["George", "Paul", "Ringo"])
