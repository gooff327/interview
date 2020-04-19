Function.prototype.mini_apply = function (context, args) {
    const fn = Symbol('fn')
    context = context || window
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}
const foo = function () {
    console.log('hello ', this.name)
}
foo.mini_apply({name: 'gooff'},[])