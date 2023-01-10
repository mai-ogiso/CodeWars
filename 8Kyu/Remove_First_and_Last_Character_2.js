// Remove First and Last Character Part Two(8kyu)

function array(arr) {
    const newArr = arr.split(",")
    return newArr.length < 3 ? null : newArr.slice(1, -1).join(" ")
}

const arr = "1,2"
console.log(array(arr))