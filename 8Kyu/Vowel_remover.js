// Vowel remover(8kyu)

function shortcut(string) {
    return string
        .replace(/a/g, "")
        .replace(/e/g, "")
        .replace(/i/g, "")
        .replace(/o/g, "")
        .replace(/u/g, "")
}

console.log(shortcut("how are you today?"))