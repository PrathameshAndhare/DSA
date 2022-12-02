#include<bits/stdc++.h>
using namespace std;
struct Node{
    int data ;
    struct Node *next;
}*first=NULL;

void create(int A[],int n){
    struct Node *last,*t;
    first=new Node;
    first->data=A[0];
    first->next=NULL;
    last=first;
    for(int i=1;i<n;i++){
        t=new Node; 
        t->data=A[i];
        t->next=NULL;
        last->next=t;
        last=t;
    }
}

void RDisplay(struct Node *p){
    if(p!=NULL){
        cout<<p->data<<' ';
        RDisplay(p->next);
    }
    // cout<<endl;
}

void display(struct Node *p){
    while(p!=NULL){
        cout<<p->data<<' ';
        p=p->next;
    }
    cout<<endl;
}

int main(){
    int A[]={4,5,1,9};
    create(A,4);
    display(first);

}