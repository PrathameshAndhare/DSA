// subsequence 

    // .   .
// [3,1,2] 
/*

[]
3
1
2
3 1
1 2
3 2
3 1 2

*/
 //      0 1 2 
let arr=[3,1,2]
let t=[]
let n=arr.length
function f(ind,t,arr,n){
    if(ind==n){
        console.log(t)
        return ;
    }
    t.push(arr[ind])
    f(ind+1,t,arr,n)// pick
    t.pop()
    f(ind+1,t,arr,n)// non pick 

}

f(0,t,arr,n)