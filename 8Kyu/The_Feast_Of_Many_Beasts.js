// The Feast of Many Beasts
// Input "great blue heron", "garlic naan"
// Output true
/* beastの一文字目がdishの一文字目に、beastの最後の文字がdishの最後の文字であればtrue */


function feast(beast, dish) {
    let beastFirstLetter = beast[0];
    let beastLastLetter = beast[beast.length-1];
    return dish[0] === beastFirstLetter && dish[dish.length-1] === beastLastLetter
  }