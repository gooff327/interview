 function throttle (fn, wait) {
    let timeout = null
    return function () {
        if(!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                fn()
            }, wait)
        }
    }
}

const a = throttle(() => { console.log('test')}, 1000)
setInterval(a, 100)