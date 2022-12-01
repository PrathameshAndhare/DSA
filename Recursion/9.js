let arr=[2,3,2,2,3,6,7]
let target =7 // 0  
let ds=[]
// [2,2,3]
// [7]

function f(ind,target,arr,ds){
    if(ind==arr.length){
        if(target==0){
            console.log(ds)
        }
        return ;
    }
    if(target>=arr[ind]){
        ds.push(arr[ind])
        f(ind,target-arr[ind],arr,ds)
        ds.pop()
    }
    f(ind+1,target,arr,ds)
}

f(0,target,arr,ds)