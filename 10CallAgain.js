// assuming master is an inbuilt func
function master(def1){
   console.log(def1)
   def1()
}
// def1 = ()=>{sum(10,20)}

// function def1(){
//     sum(10,20)
// }

const sum = (a,b) => {
    console.log(a+b)
}


// master(sum)

master(()=>{sum(10,20)})


