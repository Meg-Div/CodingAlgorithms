//Write a function called that accepts an object with numeric keys.* The function should return an array with the following format: [lowestKey, highestKey]

const keys = (obj) => {
  console.log(
    Object.keys(obj)[0],
    Object.keys(obj)[Object.keys(obj).length - 1]
  );
};

keys({ 2: "a", 7: "b", 1: "c", 10: "d", 4: "e" });
// [1, 10]
keys({ 1: "Megan", 4: "Mike", 2: "James" });
// [1, 4]
