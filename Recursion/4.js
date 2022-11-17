// sum of n natural numbers



function f(n){

    if(n<=1){
        return n 
    }
    return n+f(n-1)
}

console.log(f(5))

//5 . nested recursion 


// f(x)= x^2 + 2x + 3

// f(2)=11
// f(3)=18 

// f(f(2))= 146 


function f(n){
    if(n>100){
        return n-10
    }
    return f(f(n+11))
}


console.log(f(95))


function f(n){
    if(n<=1){
        return n
    }
    return n*f(n-1)
}

let r= f(5)
console.log(r)