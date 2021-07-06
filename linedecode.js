// write a simple line decoder:

/*

input array : [1,2,3,7,2,1]
output: [2,777,11]

So basicall the array is in pairs, first one is the count and 2nd is the number. 

Here 1 is count and 2 is number> 2
3 is count and 7 is number -> 777
2 is count and 1 is number -> 11

*/

// first solution - simple

const simpleDecoder = (count, key)=>{
    let str="";
    while(count>=1){
        str=str+key;
        count--;
    }
    return str*1;
}

const executor=(ar)=>{
    const result = [];
    for(let i=0;i<ar.length;i+=2){
       result.push(simpleDecoder(ar[i], ar[i+1]))
    }
    console.log(result)
}

executor([1,2,3,7,2,1])

// second solution - using sequence
