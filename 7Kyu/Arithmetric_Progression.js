// Arithmetic progression(7kyu)
// Input (1, 2, 5)
// Output "1, 3, 5, 7, 9"

function arithmeticSequenceElements(a, d, n) {
	return Array.from({length:n},(v,i) => a + d * i).join(", ");
}

console.log(arithmeticSequenceElements(1,2,5))
