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
