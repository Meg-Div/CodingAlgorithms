//given an array between 0 to n, returns the first integer that appears more than once if nothing is duplicated return -1;

array = [9, 13, 6, 2, 5, 5, 5, 3, 2, 2, 2, 2, 4, 3];

const duplicates = (array) => {
  let obj = {};
  for (let elem of array) {
    if (array.indexOf(elem) != array.lastIndexOf(elem)) {
      if (obj[elem]) {
        return elem;
      } else {
        obj[elem] = 1;
      }
    }
  }
  return -1;
};

duplicates(array);
