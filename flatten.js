const flatten = (arr) => {
    const flattened = arr.reduce((prev,curr) => {
        if (Array.isArray(curr)) {
            return [...prev, ...flatten(curr)]
        }
        return [...prev, curr]
    },[])
    return flattened
}
const complex = [1,2,[232,[234]],3,[4,5,[6,7,8,[9,10]]]]
console.log(flatten(complex))