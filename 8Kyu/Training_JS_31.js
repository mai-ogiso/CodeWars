// Training JS #31: methods of arrayObject---isArray() indexOf() and toString()

const blackAndWhite = arr => {
  let result = "";

  if (Array.isArray(arr) != true){
    result = "It's a fake array"
  } else if (arr.indexOf(5)>=0 && arr.indexOf(13)>=0){
    result = "It's a black array"
  } else {
    result = "It's a white array"
  }
  return result
}

console.log(blackAndWhite(5,12));