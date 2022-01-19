function foo(a) {
    var b = a*2;
    function  bar(c) {
        console.log(a, b, c);
    }
    bar(b*3)
}
foo(2)

//动态作用域
/*
*   d is not defined
*   foo1()无法找到d变量的引用时，也不会顺着调用栈在调用foo1()的地方查找a
* */
function foo1() {
    console.log(d)
}


function bar1() {
    var d = 3;
    // console.log(this)
    foo1();
}
// var d  = 4;
// foo1()
bar1()
