function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

/** Builds an url to be used with React-Router */
function buildUrl(array, index) {
    let urlString = "/"
    console.log("array: " + array)
    for (let i = 0; i <= index; i++) {
        urlString += ("/" + array[i])
    }
    return urlString
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export { capitalize, buildUrl, randomNumber }