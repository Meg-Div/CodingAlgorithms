//Given an array of objects where every value is a number, return total of all values for all objects in the array.

const values = (objArr) => {
  let total = 0;
  for (let obj of objArr) {
    total += Object.values(obj).reduce((a, b) => a + b, 0);
  }
  console.log(total);
};

values(
  (salesTotals = [
    { jan: 10, feb: 25, mar: 15 },
    { jan: 50, dec: 25 },
  ])
); // 125

values([{ age: 25 }, { age: 25 }, { age: 50 }]); //100
