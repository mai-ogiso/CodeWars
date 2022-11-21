// Spoonerize Me(7kyu)
// Input "pack of lies"
// Output "lack of pies"

let words = "pack of lies";

function spoonerize(words) {
    let arr = words.split(" ");
    let firstStr = arr[0][0];
    let switchStr = arr[arr.length - 1][0]
    return arr.map((item, index) =>
        index === 0 ? item.replace(firstStr, switchStr) :
            index === arr.length - 1 ? item.replace(switchStr, firstStr) :
                item).join(" ");
}

console.log(spoonerize(words))