//Given two already-sorted arrays, return new list of all elements, sorted. But not using the .sort() method

const sort = (arr, arr2) => {
  //selection sort
  newArr = [...arr2, ...arr];
  for (i = 0; i < newArr.length - 1; i++) {
    smallest = i;
    for (j = i + 1; j < newArr.length; j++) {
      if (newArr[j] < newArr[smallest]) {
        smallest = j;
      }
    }
    // Swap
    temp = newArr[i];
    newArr[i] = newArr[smallest];
    newArr[smallest] = temp;
  }
  console.log(newArr);
};

function sorted(arr1, arr2) {
  let merged = [arr1, arr2].flat();
  let sorted = [];
  let min = (a, b) => Math.min(a, b);
  while (merged.length > 0) {
    lowest = merged.reduce(min);
    index = merged.indexOf(lowest);
    sorted.push(lowest);
    merged.splice(index, 1);
  }
  console.log(sorted);
}

sorted([1, 2, 3], [4, 5, 6]);
//[1,2,3,4,5,6]

sort([1, 2, 3], [4, 5, 6]);
//[1,2,3,4,5,6]

sort([3, 4], [1, 2, 3]);
//[1,2,3,3,4]
