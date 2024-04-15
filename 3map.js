// // loops:

// // map 
// // for each 


// // filter


// // function map(){
// //     sqaure(vaule, index)
// // }

// let arr = [10,20,30,40,50]

// // let x = arr.map(function (value,index){ return value*value})

// // let x = arr.map( (value,index) => { return value*value})

// //  let x = arr.map(sqaure)

// //  function sqaure(value, index){
// //     // console.log("hello", value, index)
// //     return value*value
// //  }


// //  console.log(x)
// // //  console.log(arr)
 

// // let arr1  = [10,21,30,43,50]

// // let x = arr1.map(function (value, index){ return value%2==0 })

// // console.log(x)


// //    arr1.forEach(function (value,index){ console.log(value*value)})



// let arr1  = [10,21,30,43,50]

// // let x = arr1.filter( function (value, index){return value%2==0 })

// let x = arr1.filter( function (value, indx){return 7>0 })

// console.log(x)



function sum(f1,f2){
    return f1()+f2()
}


// function fun1(){
//     return 10
// }

// function fun2(){
//     return 20
// }

// sum(fun1,fun2)

sum(()=>{return 10}, ()=>{return 20})