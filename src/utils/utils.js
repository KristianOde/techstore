function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function buildUrl(array, index) {
    let urlString = "/"
    console.log("array: " + array)
    for (let i = 0; i <= index; i++) {
        urlString += ("/" + array[i])
    }
    return urlString
}

export { capitalize, buildUrl }