
// Normal while loop-->

let i=5;
while(i>0){
    console.log(i)
    i--;
}
// 5 4 3 2 1




/*
Types of recursion --->
1. Tail recursion 
2. Head recursion 
3. Tree recursion
4. Indirect recursion
5. Nested recursion

*/

// 1. Tail recursion -->


function f(n){

    if(n<=0){
        return 
    }

    console.log(n)  // 5 4 3 2 1

    f(n-1)

}
f(5) // 5 4 3 2 1


// 2. Head recursion -->


function f(n){

    if(n<=0){
        return 
    }
    f(n-1)
    console.log(n)  //1 2 3 4 5

}
f(5) // 1 2 3 4 5




function f(n){
    if(n<=1){
        return n
    }
    return f(n-1)*n
}


let r=f(5)
console.log(r)



// f(n=5)-->120

// f(n=4)--->24 

// f(n=3)--->6

// f(n=2)---->2

// f(1)--->1

// factorial 5! 5 4 3 2 1 120