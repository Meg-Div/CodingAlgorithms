function generateDocument(characters, document) {
  chars = characters.split("");
  for (const elem of document) {
    if (chars.includes(elem)) {
      chars.splice(chars.indexOf(elem), 1);
    } else return false;
  }

  return true;
}

const characters = "Bste!hetsi ogEAxpelrt x ";
const document = "AlgoExpert is the Best!";
//true;

generateDocument(characters, document);
