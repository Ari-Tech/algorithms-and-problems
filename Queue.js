// implement Queue in js

class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
     return this.items.shift()
    }
    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.items[0];

    }
    isEmpty(){
        return this.items.length === 0;
    }

    printQueue(){
        let str="";
        for(let i=0;i<this.items.length;i++){
            str += this.items[i] +" ";
        }
       return str;
    }
}

// now operations

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.printQueue());
q.dequeue();
console.log(q.printQueue());
console.log(q.peek());
console.log(q.printQueue());