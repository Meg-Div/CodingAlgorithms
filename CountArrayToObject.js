//Create an object that counts elements in an array. The object key is the array number and the value is the times the key appears in the array

const count = (arr) => {
  obj = {};
  for (const elem of arr) {
    if (obj[elem]) {
      obj[elem]++;
    } else {
      obj[elem] = 1;
    }
  }
  console.log(obj);
};

count([3, 10, 3, 3, 3]);
//{ '3': 4, '10': 1 }
