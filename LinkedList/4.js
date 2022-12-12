class Node {
    constructor(data){
        this.data=data
        this.next=null
    }
}

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

    delete(ind){

        if(ind<0||ind>this.length-1) return ;
        if(ind==0){
            let t=this.head
            this.head=this.head.next
            t.next=null
            this.length--
            return ;
        }
        else if(ind==this.length-1){
            let o=this.head
            let j=0;
            while(j!=ind-1){
                o=o.next
                j++
            }
            this.length--
            o.next=null
            return 
        }

        let i=1;
        let q=this.head
        while(i!=ind-1){
            q=q.next
            i++;
        }
        let f=q.next
        let k=f.next
        q.next=k
        f.next=null
        this.length--
        return 

    }

    inSort(data){
        // check if ll is sorted --->
        let x= this.head
        let y=x.next
        let i=0
        while(y){
            if(x.data>y.data) return 
            x=x.next
            y=y.next
        }

        let first =this.head
        let second = first.next
        let t= new Node(data)
        if(t.data<=first.data){
            t.next=this.head
            this.head=t
            this.length++
            return 
        }
        //           f s
        // 1 2 4 5 5 7 
        while(second){
            if(first.data<=t.data && t.data<second.data){
                first.next=t
                t.next=second
                this.length++
                i=1;
                return 
            }
            first =first.next
            second = second.next
        }

        if(i==0){
            first.next=t
            this.length++
            return 
        }

        return 

    }
    
    print(){
        let a=this.head
        while(a){
            console.log(a.data)
            a=a.next
        }
    }
}

let n=new ll(1)
n.append(2)
n.append(5)
n.append(5)
n.insert(2,4)
n.insert(5,7)

// n.print()

// check if ll is sorted or not --->
//     a b 
// 1 2 4 5 5 7 

// let aa = n.head
// let bb= aa.next
// let counter=0

// while(bb){
//     if(aa.data>bb.data){
//         console.log('Not sorted')
//         counter=1
//         return 
//     }
//     aa=aa.next
//     bb=bb.next
// }

// if(counter==0){
//     console.log('Sorted')
// }


// inserting in a sorted ll 
// 0 1 2 3 4 5
// data =0
// x y            
// 0 1 2 3 4 5 5 7 

// n.inSort(3)
// n.inSort(10)
// n.print()





// remove duplicates from sorted linked list --->

//          x   y 
//  1 2 3 4 5 5 7 

let xx= this.head
let yy =xx.next
while(yy){
    if(xx.data==yy.data){
        let q= yy
        yy=yy.next
        q.next=null
        xx.next=yy
        this.length--
    }
    else{
        xx=xx.next
        yy=yy.next
    }
}


