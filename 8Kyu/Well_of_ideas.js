// Well of Ideas - Easy Version(8kyu)


function well(x) {
    const goodNum = x.filter(item => item == "good").length
    return goodNum > 2 ? "I smell a series!" : goodNum > 0 ? "Publish!" : "Fail!"
}

const x = ['good', 'bad', 'bad', 'bad', 'bad']

console.log(well(x))