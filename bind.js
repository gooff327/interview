const foo = function () {
    console.log(this.bar)
}
Function.prototype.mini_bind = function (context) {
    console.log(this)
    return () => this.call(context)
}
const baz = foo.mini_bind({bar: 'hello world'})
baz()