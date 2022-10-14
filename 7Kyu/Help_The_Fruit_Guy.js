// Help the Fruit Guy(7kyu)
// Input ["apple","rottenBanana","apple"]
// Output ["apple","banana","apple"]

function removeRotten(bagOfFruits){
    return bagOfFruits ? bagOfFruits.map(item => item.replace("rotten","").toLowerCase()) : []
  }
  
  console.log(removeRotten(["apple","rottenBanana","apple"]))