/*
*  严格模式下是undefined
*  非严格模式下是 2
* */
function foo() {
    console.log(this.a)
}
var a = 2
foo();

function foo2() {
    console.log(this)
    console.log(this.b);
}
var obj = {
    b:2,
    foo:foo2
}
obj.foo()


function foo3() {
    console.log(this.f)
}
var obj2 = {
    f:2
}
var obj3 = "hello"
foo3.call(obj2)
foo3.call(obj3)
