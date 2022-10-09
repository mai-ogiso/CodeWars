// Parts of a list(7kyu)
// Input ["az", "toto", "picaro", "zone", "kiwi"]
// Output 
/*
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] */

function partlist(arr) {
    let result = [];
    for (let i = 0 ; i < arr.length-1 ; i++){
      let firstItem = arr.slice(0,i+1);
      let secondItem = arr.slice(i+1);
      result.push([firstItem.join(" "),secondItem.join(" ")])
    }
    return result
  }
  
  console.log(partlist1(["az", "toto", "picaro", "zone", "kiwi"]))