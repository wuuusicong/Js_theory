/*
*   eval
*
*/




/*
*  词法作用域
*   with: with内部实际是执行了LHS查询
*   ouput:
*   { a: 3, b: 2 }
    { a: 6, b: 2 }
    {}
    {}
    b = 2
    *  w
    * with 里的声音为全局变量赋值(无该变量，则创建)
* */

var obj = {
    a : 3,
    b : 2
}

console.log(obj)

with (obj) {
    a = 6;
    b = 2;
}
console.log(obj)


var obj = {

}

console.log(obj)

with (obj) {
    a = 6;
    b = 2;
}
console.log(obj)
console.log(b)
