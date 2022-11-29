// String ends with?
// Input solution('abc', 'bc')
// Output true

function solution(str, ending) {
    if (!ending.length) return true;
    return str.slice(- ending.length) === ending
}

console.log(solution1('abc', ''))