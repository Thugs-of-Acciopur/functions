
function hello(a, fun1){
    // a = 10
    // fun1 = adress of sum 
    console.log(a)
    console.log(fun1)
    fun1(10,20)
}

let x = 10 
const sum = (a,b) => {
    console.log(a+b)
}


hello(x, sum)

// hello(x, sum(10,20))



// function hii(){
//     console.log("hii")
//     return 1000
// }

//  hii()

// console.log("y", y) 