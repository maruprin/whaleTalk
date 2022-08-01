const input = "El mundo es de los valientes";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  let letra = input[i].toLowerCase();
  if (input[i] === "e") {
    resultArray.push(input[i]);
  } else if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let ind = 0; ind < vowels.length; ind++) {
    if (letra === vowels[ind]) {
      resultArray.push(vowels[ind]);
    }
  }
}
const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
