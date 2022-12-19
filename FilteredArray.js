//Given an array of 'dogs', 'cats', and 'water', write a function called separate, which returns a new array so that the dogs are separated from the cats by water. Make sure that cats always come first in the array.

function separate(arr) {
  return [
    ...arr.filter((elem) => elem === "cat"),
    ...arr.filter((elem) => elem === "water"),
    ...arr.filter((elem) => elem === "dog"),
  ];
}
separate(["dog", "cat", "water"]); // ['cat','water','dog']
