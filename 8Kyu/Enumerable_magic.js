// Enumerable Magic #20 - Cascading Subsets(8kyu)

function eachCons(array, n) {
    const loopNum = array.length - n
    let result = []
    for (let i = 0; i <= loopNum; i++) {
        const tempArr = Array.from({ length: n }, (_, index) => array[index + i])
        result.push(tempArr)
    }
    return result;
}

const array = [1, 2, 3, 4]
const n = 2

console.log(eachCons(array, n))