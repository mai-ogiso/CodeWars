// Remove exclamation marks(8kyu)
/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

function removeExclamationMarks(s) {
    // I cannot use replaceAll at codewars
    // return s.replaceAll('!' , '');
    return s.replace(/!/g, '')
}

console.log(removeExclamationMarks("Hello World!"))