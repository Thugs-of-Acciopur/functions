// hof => higher order function

// function hof(fun1) {

//     return fun2
// }

// if a function is accepting or returning another function then it is called as higher order function

//  map, forEach, filter

// reduce:

let arr = [10, 20, 30, 40, 50]

// reduce:   sum = 0

// let x = arr.reduce((sum,value, index)=> {return sum+value}, 0)

let x = arr.reduce((sum,value, index)=> {return sum+value})

// p1 = (sum,value, index)=> {return sum+value}
// p2 = 0 // initial value

console.log(x)
