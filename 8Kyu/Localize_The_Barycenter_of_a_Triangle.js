// Localize The Barycenter of a Triangle(8kyu)
// Input ([4, 6], [12, 4], [10, 10])
// Output [8.6667, 6.6667]

function barTriang(p1, p2, p3) {
    let arr = [...arguments].flat()
    let oddArr = arr.filter((_, index) => !(index % 2))
    let evenArr = arr.filter((_, index) => index % 2)
    const calc = arr => Math.round(arr.reduce((acc, cur) => acc + cur) / 3 * 10000) / 10000
    return [calc(oddArr), calc(evenArr)]
}