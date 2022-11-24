// max diff - easy(7kyu)
// Input [1, 2, 3, -4]
// Output returns 7 because 3 - (-4) == 7

function maxDiff(list) {
    const maxNum = Math.max(...list)
    const minNum = Math.min(...list)
    return list.length >= 1 ? maxNum - minNum : 0;
};

const list = []
console.log(maxDiff(list))