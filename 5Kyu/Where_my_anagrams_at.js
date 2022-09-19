// Where my anagrams at?(5kyu)

const anagrams = (word, words) => {
  const sortedStr = str =>{
    return str.split("").sort().join("");
  }

  let arr = [];
  let sortedWord = sortedStr(word);
  words.forEach((item,index) => sortedWord == sortedStr(item) ? arr.push(words[index]) : "");
  return arr;
}