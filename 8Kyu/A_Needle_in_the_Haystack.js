// A Needle in the Haystack(8kyu)

function findNeedle(haystack) {
    const needleIndex = haystack.indexOf("needle")
    return needleIndex < 0 ? "" : `found the needle at position ${needleIndex}`
}