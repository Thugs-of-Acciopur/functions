// pass by value and pass by reference


// let a = 10 

// function modify(a){  // 10
//      a = 500
//     console.log("inisde", a) // 500
// }




// modify(a)

// console.log("outside", a) // 10




function modify(arr){ // brr = address =>  [10,20,30,40]
    arr[0] = 1000 
    console.log("inside", arr) // [1000,20,30,40]
}

let arr = [10,20,30,40]
modify(arr) // address
console.log("outside", arr)