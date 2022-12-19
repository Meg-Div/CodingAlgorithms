//Write a function that generates a string from an object's key/value pairs.The format should be "key = value, key = value". Each key/value pair should be separated by a comma and space except for the last pair.

const stringFromObject = (obj) => {
  str = "";
  for (const [key, value] of Object.entries(obj)) {
    str += `${key} = ${value}, `;
  }
  console.log(str.substring(0, str.length - 2));
};

function stringFromObject2(obj) {
  newArray = [];
  for (let [key, value] of Object.entries(obj)) {
    newArray.push(`${key} = ${value}`);
  }
  console.log(newArray.join(", "));
}

stringFromObject1({ name: "James", job: "Dancer", isCatOwner: true });
// "name = James, job = Dancer, isCatOwner = true"

stringFromObject2({ a: 1, b: "2" });
// "a = 1, b = 2"
