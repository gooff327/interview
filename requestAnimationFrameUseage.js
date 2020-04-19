const createElement = () => {
    let button = document.createElement('button')
    let content = document.createTextNode('test')
    button.appendChild(content)
    document.body.appendChild(button)
    return button
}
const moveElement = (element, distance, duration) => {
    const start = performance.now()
    function move (currentTime) {
        const elapsed = currentTime - start
        const progress = elapsed / duration
        element.style.transform = `translateX(${distance * progress}px)`
        if (progress < 1) {
            requestAnimationFrame(move)
        }
    }
    requestAnimationFrame(move)
}
moveElement(createElement(), 500, 2000)