
// tree recursion 

// function f(n){
//     if(n<=0){
//         return 
//     }
//     console.log(n)
//     f(n-1)
//     f(n-1)
// }

// f(3)




// indirect recursion 

function fa(n){
    if(n>0){
        console.log(n)
        fb(n-1)
    }
}


function fb(n){
    if(n>0){
        console.log(n)
        fa(Math.floor(n/2))
    }
}

fa(20)