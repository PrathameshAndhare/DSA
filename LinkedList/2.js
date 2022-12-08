class Node {
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList {
    constructor(data){
        this.head = new Node(data)
        this.tail=this.head
        this.length=1;
    }
    append(data){
        let t=new Node(data)
        this.tail.next=t;
        this.tail=t;
        this.length++;
    }

    insert(ind,data){
        if(ind<0||ind>this.length) return ;
        let i=0;
        let q=this.head
        let w=new Node(data)
        if(ind==0){
            w.next=this.head
            this.head=w
            this.length++
            return 
        }

        while(i!=ind-1){ 
            q=q.next
            i++;
        }
        let e=q.next
        w.next=e   
        q.next=w
        this.length++;
        return 

    }
    dlt(ind){
        if(ind==0){
            let a=this.head 
            this.head=this.head.next
            a.next=null
            return 
        }
        let i=0;
        let a=this.head 
        while(i!=ind-1){
            a=a.next
            i++
        }
        let z=a.next.next
        let s=a.next
        a.next=z
        s.next=null


    }
    print(){
        let q=this.head
        while(q){
            console.log(q.data)
            q=q.next
        }
    }
}

let sum=0
let arr=[1,2,3,4,7,68]
let n=new LinkedList(arr[0])

for(let i=1;i<arr.length;i++){
    n.append(arr[i])
}

// sum 
// let x=n.head
// while(x){
//     sum+=x.data
//     x=x.next
// }

// console.log(sum)

// max min --->
// let arr=[1,2,5,4,7,68]
// let x=n.head

// let min=x.data
// let max=x.data

// while(x){
//     if(x.data>max){
//         max=x.data
//     }
//     if(x.data<min){
//         min=x.data
//     }
//     x=x.next
// }
// console.log(min,max)


// search 

// let arr=[1,2,5,4,7,68]

//       l    m     r
// let arr=[1,2,5,4,7,68]
// let n=new LinkedList(arr[0])

// for(let i=1;i<arr.length;i++){
//     n.append(arr[i])
// }
// let target= 4
// let t=-1
// let x=n.head

// while(x){
//     if(x.data==target){
//         console.log('Found')
//         t=1
//         break
//     }
//     index++
//     x=x.next
// }

// if(t==0){
//     console.log('Not found')
// }


// check if ll is sorted or not 
// let arr=[1,2,5,4,7,68]
let a=n.head
let b=a.next
let i=0
// a b
// 1 2 5 4 6 7

while(b){
    if(b.data>=a.data){
        a=a.next
        b=b.next
    }
    else{
        console.log('Not sorted')
        i=1
        break
    }
}

if(i==0){
    console.log('Sorted')
}



