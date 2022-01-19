function foo2() {
    console.log(1)
}

foo2() // ouput 1

var foo2 = function () {
    console.log(2)
}


var a = 3;
function foo3() {
    var a =5 ;
    (() => {var a = 10})()
    console.log(a)
}
foo3()
console.log(a)
