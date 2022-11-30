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

sum = 4 
*/
 //      0 1 2 

// function s(arr){
//     let x=0;
//     for(let i=0;i<arr.length;i++){
//         x+=arr[i];
//     }
//     return x;
// }
// let arr=[3,1,2,4]

// let t=[]
// let sum =0
// let target =4
// let n=arr.length
// function f(ind,t,arr,n){
//     if(ind==n){
//         if(s(t)==target){
//             console.log(t)
//         }
//         return ;
//     }
//     t.push(arr[ind])
//     f(ind+1,t,arr,n)// pick
//     t.pop()
//     f(ind+1,t,arr,n)// non pick 
// }

// f(0,t,arr,n)
// f(0,[],[3,1,2],3)



let target =4;
function f(ind,t,arr,n,sum){
    if(ind==n){
        if(sum==target){
            console.log(t)
        }
        return ;
    }
    t.push(arr[ind])
    f(ind+1,t,arr,n,sum+arr[ind])// pick
    t.pop()
    f(ind+1,t,arr,n,sum)// non pick 
}

f(0,[],[3,1,2],3,0)