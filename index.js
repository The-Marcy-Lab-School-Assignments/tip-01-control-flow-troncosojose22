/*
Complete the function so that it returns the following:
80 or above → "Wear shorts and a t-shirt."
60–79 → "Wear jeans and a light jacket."
40–59 → "Wear a sweater and pants."
Below 40 → "Wear a heavy coat, scarf, and boots."
*/

const outfitPicker = (temp) => {
  // ✍️ Write your code here
  if (temp >= 80) {
    return 'Wear shorts and a t-shirt.';
  } else if (temp >= 60 && temp <= 79) {
    return 'Wear jeans and a light jacket.';
  } else if (temp >= 40 && temp <= 59) {
    return 'Wear a sweater and pants.';
  } else {
    return 'Wear a heavy coat, scarf and boots.';
  }
};

//Test your function below

console.log(outfitPicker(1));
console.log(outfitPicker(81));