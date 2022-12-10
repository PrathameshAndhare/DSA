class Node {
    constructor(data){
        this.data=data
        this.next=null
    }
}

// 1 2 3

class ll {
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

    insert(ind,data){
        if(ind<0||ind>this.length) return ;
        let i=0;
        let w=new Node(data)
        let q= this.head
        if(ind==0){// at start 
            w.next=this.head
            this.head=w;this.length++
            return 
        }

        while(i!=ind-1){
            q=q.next
            i++;
        }
        let r= q.next
        q.next=w;
        w.next=r
        this.length++
        return ;

    }
    // 1 2 3
    delete(ind){

        if(ind<0||ind>this.length-1) return ;
        if(ind==0){
            let t=this.head
            this.head=this.head.next
            t.next=null
            return ;
        }
        else if(ind==this.length-2){
            let o=this.head
            let j=0;
            while(j!=ind-1){
                o=o.next
                j++
            }
            o.next=null
            return 
        }
        let i=0;
        let q=this.head
        while(i!=ind-1){
            q=q.next
            i++;
        }
        let k=q.next.next
        let f=q.next
        q.next=k
        f.next=null

    }

    print(){
        let a=this.head
        while(a){
            console.log(a.data)
            a=a.next
        }
    }
}

let n=new ll(12)
n.append(22)
n.append(32)
n.insert(2,11)
n.insert(0,111)
n.insert(5,43)
n.insert(23,1)
n.delete(0)
n.delete(2)
n.delete(n.length-1)
n.print()
