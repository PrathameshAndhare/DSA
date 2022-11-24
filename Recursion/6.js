function f(m,n){
    if(n==0){
        return 1
    }
    if(n%2==0){
        return f(m*m,n/2)
    }
    else{
        return m*f(m*m,(n-1)/2)
    }
}

f(2,9)


// let arr = [20,30,50,70,90,60,10,30]
// let l = arr.length-1
let arr=[]
for(let i=0;i<10;i++){
    arr.push(Number(prompt('Enter a number')))
}
console.log(arr)
function revArr(arr,n){

    let l = arr.length-1
    if(n <Math.floor(arr.length/2)){
        return 
    }
    let tmp = arr[n]
    // console.log(tmp)
    arr[n] = arr[l-n]
    arr[l-n] = tmp

    revArr(arr,n-1)
    
}
revArr(arr,arr.length-1)
console.log(arr)