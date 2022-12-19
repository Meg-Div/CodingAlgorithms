//Return the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

const frequent = (arr) => {
  let obj = {};
  let newArr = [];
  for (let elem of arr) {
    if (obj[elem]) {
      obj[elem]++;
    } else {
      obj[elem] = 1;
    }
  }
  for (let [key, value] of Object.entries(obj)) {
    if (value >= Math.max(...Object.values(obj))) {
      newArr.push(key);
    }
  }
  console.log(Math.max(...newArr));
};

frequent([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]);
