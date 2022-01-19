/*
*   1 hello
    2 hello
    3 hello
* */
function foo(el) {
    console.log(el, this.id)
}
var obj = {
    id: "hello"
}
var c = [1,2,3]
c.forEach(foo,obj);
