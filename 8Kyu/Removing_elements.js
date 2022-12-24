// Removing Elements(8kyu)
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr) {
    return arr.filter((_, index) => !(index % 2))
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeEveryOther(arr))