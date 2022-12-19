//Turn an array of arrays into an array of objects.

const transform = (arr) => {
  objArr = [];
  for (let elem of arr) {
    objArr.push(Object.fromEntries(elem));
  }
  console.log(objArr);
};

transform([
  [
    ["firstName", "James"],
    ["lastName", "Blunt"],
    ["age", 80],
    ["job", "singer"],
  ],
  [
    ["firstName", "Mari"],
    ["lastName", "Kale"],
    ["age", 45],
    ["job", "dancer"],
  ],
]);

//[{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
//{ firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]
