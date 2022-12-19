//Create a function that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

function isAlt(str) {
  let vowels = ["a", "e", "o", "i", "u"];

  for (i = 0; i < str.length - 1; i++) {
    if (vowels.includes(str[i]) && vowels.includes(str[i + 1])) {
      return false;
    }
  }
  return true;
}

isAlt("papop");
isAlt("robar");
