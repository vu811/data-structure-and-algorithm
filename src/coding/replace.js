export const replaceAll = (str, replace, by) => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result+= str[i] === replace ? by : str[i]
    }
    return result
}