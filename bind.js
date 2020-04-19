const foo = function () {
    console.log(this.bar)
}
Function.prototype.bind = function (context) {
    const fn = this
    return () => fn.call(context)
}
const baz = foo.bind({bar: 'hello world'})
baz()