// var myObj = {}
// var myObj2 = new Object();
// myObj2.key = value;




// var strMy = "Hello World";

// console.log(typeof  strMy)
// console.log(strMy.length)
// console.log(typeof strMy)
//
// var strMy2 = new String("Hello World");
//
// console.log(typeof  strMy2)




var myObject = {
    a:2
};
var c = Object.getOwnPropertyDescriptor( myObject, "a" );  //检测属性特性的方法
console.log(c)
