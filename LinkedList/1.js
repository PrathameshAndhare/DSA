

// let head ={
//     data:10,
//     next:{
//         data:90,
//         next:{
//             data:43,
//             next:null
//         }

//     }
// }

// console.log(head)

class Node {
    constructor(data){
        this.data=data
        this.next=null
    }
}


class LinkedList {
    constructor(data){
        this.head=new Node(data)
        this.tail=this.head
        this.length=1;
    }

    append(data){
        let t=new Node(data)
        this.tail.next=t
        this.tail=t
        this.length++

    }
}


let n1=new LinkedList(100)
n1.append(200)

console.log(n1)



// let q=new Node(23)
// // console.log(q)
// let w=new Node(34)
// // console.log(w)
// q.next=w
// console.log(q)