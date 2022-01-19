/*
*   规避冲突
* 因为i 被固定设置为3，永远满足小于10 这个条件。
* */
var a = 0

function foo() {
    function bar(a) {
        i = 3;
        console.log( a + i );
    }
    for (var i = 0; i< 10;i++){
        bar( i * 2)
    }
}

/*
*   函数作用域
*   在任意代码片段外部添加包装函数，可以将内部的变量和函数定义隐藏起来。外部作用域无法访问包装函数内部的任何内容。
* */

function test() {
    var b = 5;
}
// test()
{
    var b = 5
}
console.log(b)
{
    c = 5
    var c;
}
console.log(c)

// console.log(d)

