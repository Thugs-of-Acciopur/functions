

// function hello(a,b,c,d,e){
//     console.log(a,b,c,d,e)
// }


// // let x1 = 10
// // let x2 = true 
// // let x3 = "hello"
// // let x4 = [1,2,3]
// // let x5 = {name:"John", age:30}

// hello(x1,x2,x3,x4,x5) // 10 true hello [1,2,3] {name:"John", age:30}



function hello(a, fun){
      // a = x = 10
      // fun = hii
      console.log(a)
      console.log(fun())
}


let x = 10

function hii(){
    console.log("hii")
    return 1000
}

// let y = hii()


hello(x, hii)





// function sum(a,b){
//     console.log(a+b)
// }

// // let sum = (a,b)=>{
// //     console.log(a+b)
// // }

// let add = sum

// add(10,20)