// Sort by Last Char(7kyu)
// Input 'take me to semynak'
// Output ['take', 'me', 'semynak', 'to']

function last(x){
    return x
      .split(" ")
      .map(item => item.split("").reverse().join(""))
      .sort((a,b) => a.charCodeAt(0)- b.charCodeAt(0))
      .map(item => item.split("").reverse().join(""))
  }
  
  console.log(last('take me to semynak'))