function wait(message) {

    setTimeout(function timer() {
        console.log( message)
    }, 1000)
}

wait("hello world")


for (var i=0; i<=5; i++) {
    let j = i;
    setTimeout( ()=>{
        console.log(j)
    },i*1000)
}
