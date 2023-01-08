// MinMinMax(7kyu)

function minMinMax(array) {
    const sortedArr = array.slice().sort((a, b) => a - b)
    const min = sortedArr[0];
    const max = sortedArr[sortedArr.length - 1];
    for (let i = 1; i < max - min; i++) {
        if (!sortedArr.includes(min + i)) {
            return [min, min + i, max]
        }
    }
}


const array = [-1, 4, 5, -23, 24]
console.log(minMinMax(array))