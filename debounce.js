function debounce (fn, wait) {
    let timeout = null
    return function() {
        console.log('hit')
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            timeout = null
            fn()
        }, wait)
    }
}

const a = debounce(() => { console.log('test')}, 1000)
setInterval(() => {
    for(let i = 1; i < 10; i++) {
        a()
    }
}, 3000)