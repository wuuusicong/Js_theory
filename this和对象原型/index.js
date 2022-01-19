var foo = a => {
    console.log(a)
}
foo(2)


function foo1(num) {
    console.log("foo1: " + num);
    this.count++;
}
foo1.count = 0;
var i = 3;
foo1(i)
console.log(foo1.count) //0 count 不应该输出3吗？

function foo2(num) {
    console.log('foo2: ' + num)
    foo2.count++;
}
foo2(4)
foo2.count = 0
foo2(4)
foo2(4)
console.log(foo2.count) // 2


/*
*   使用call (..) 确保this指向函数对象foo本身
* */
for(var i=0; i<10; i++) {
    if(i>5) {
        foo2.call(foo2, i)
    }
}
console.log(foo2.count) // 2 + 4 = 6



function foo4() {
    var e = 6
    console.log(this)
}
foo4()
// console.log(e)
