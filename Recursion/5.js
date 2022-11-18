/*
  a b
0 1 1 2 3 5 8 13 ....

*/


// let a=0,b=1
// let n=8
// console.log(a)
// console.log(b)
// for(let i=2;i<n;i++){
//     let c=a+b
//     console.log(c)
//     a=b;
//     b=c;
// }



// function f(n){
//     if(n<=1){
//         return n
//     }
//     return f(n-1)+ f(n-2)
// }
// // n*(2^n)=24 
// // n =3 

// // console.log(f(5))

// let n=7
// for(let i=0;i<n;i++){
//     console.log(f(i))
// }



// 2 5 -->



// let a=2 // 4 8 16 32
// let n=5

// // 2 2 2 2 

// for(let i=1;i<5;i++){
//     a=a*2
// }

// console.log(a)

// m^n 
function f(m,n){
    if(n==0){
        return 1
    }
    return m*f(m,n-1)
}

console.log(f(2,5))