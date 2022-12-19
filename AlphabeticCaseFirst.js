//Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
function alpha(str) {
  const abc = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  console.log(
    str
      .split("")
      .sort((a, b) => abc.indexOf(a) - abc.indexOf(b))
      .join("")
  );
}

alpha("aAbaBb"); //AaaBbb
alpha("beeeEBb"); //BbbEeee
