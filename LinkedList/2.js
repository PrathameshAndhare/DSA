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
    print(){
        let q=this.head
        while(q){
            console.log(q.data)
            q=q.next
        }
    }
}

let n=new LinkedList(5)
n.append(7)
n.append(2)
n.append(15)
n.insert(0,100)
n.insert(4,10)
n.insert(6,54)

n.print()
// console.log(n)