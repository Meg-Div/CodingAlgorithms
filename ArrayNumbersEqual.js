//Given two arrays that contain only numbers, are they equal?

function sorted(arr1, arr2) {
  console.log(
    arr1.reduce((a, b) => a + b, 0) === arr2.reduce((a, b) => a + b, 0)
  );
}

sorted([1, 2, 3], [2, 3, 1]);
//[1,2,3,4,5,6]

sorted([3, 4], [1, 2, 3]);
//[1,2,3,3,4]
