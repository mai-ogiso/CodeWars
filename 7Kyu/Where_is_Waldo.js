function findWaldo(crowd) {
    let allArr = Array.from(crowd.join(""));
    let uniqueArr = [...new Set(allArr)];
    let lengthArr = uniqueArr.map(item => allArr.filter(str => str === item).length);
    let waldoStr = uniqueArr[lengthArr.indexOf(1)];

    // Where is Waldo?
    let waldoNum = allArr.indexOf(waldoStr)
    let column = crowd[0].length
    return [Math.floor(waldoNum / column), waldoNum - column * Math.floor(waldoNum / column)]
}