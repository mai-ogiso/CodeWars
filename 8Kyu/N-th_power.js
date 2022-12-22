// N-th Power(8kyu)
// Input  ([1, 2, 3, 4],2)
// Output  3^2 == 9

function index(array, n) {
    return n >= array.length ? -1 : Math.pow(array[n], n)
}

console.log((index([4, 4, 1, 6, 4], 5)))