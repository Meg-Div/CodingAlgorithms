//find the three largest numbers without sorting

function findThreeLargestNumbers(array) {
  for (i = 0; i < array.length - 1; i++) {
    smallest = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    temp = array[i];
    array[i] = array[smallest];
    array[smallest] = temp;
  }
  console.log(array.slice(-3, array.length));
}

findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);

//[ 18, 141, 541 ]
