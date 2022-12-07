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
    rdisplay(a){
        console.log(a.data)
        this.rdisplay(a.next)
    }
    print(){
        let q=this.head
        while(q){
            console.log(q.data)
            q=q.next
        }
    }
}


let arr=[1,2,5,4,7,68]
let n=new LinkedList(arr[0])
for(let i=1;i<arr.length;i++){
    n.append(arr[i])
}

n.rdisplay(n.head)

// n.print()
// console.log(n)