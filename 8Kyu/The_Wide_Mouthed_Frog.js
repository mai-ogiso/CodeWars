// The Wide-Mouthed frog!
// Input animal name ex) toucan, ant bear , and so on
// Output alligator => small それ以外はwide

function mouthSize(animal) {
    return animal.toLowerCase() === "alligator" ? "small" : "wide"
  }
  
  console.log(mouthSize("ant bear"))