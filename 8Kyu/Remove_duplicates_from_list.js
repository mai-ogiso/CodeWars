// Remove duplicates from list(8kyu)
/*
Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.*/

const distinct = a => [...new Set(a)];

const a = [1,1,2];
console.log(distinct(a))