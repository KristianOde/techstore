function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

/** Builds an url to be used with React-Router */
function buildUrl(array, index) {
    let urlString = "/"
    for (let i = 0; i <= index; i++) {
        urlString += ("/" + array[i])
    }
    return urlString
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function checkIfObjectKeyExists(objectKey, objectArray) {
    objectArray.forEach(e => {
        const filterType = Object.keys(e)
        if (objectKey === filterType)
            return true
        else return false
    })
}

function checkIfObjectValueExists(objectValue, objectArray, value) {
    if (objectArray.length < 1) return false
    objectArray.forEach(e => {
        if (objectArray[value] === objectValue)
            return true
        else return false
    })
}

export { capitalize, buildUrl, randomNumber, checkIfObjectKeyExists, checkIfObjectValueExists }