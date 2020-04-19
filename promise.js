function returnText (callback) {
    setTimeout(() => {
        callback('hello!')
    }, 5000)
}
returnText((arg) => {
    console.log(arg)
})