/* 
The problem is to find max concurrent same characters in a string and return the character, position and length 

Example: aaabbbbbbbcccddd
This should return ['b', 3, 7]
*/

const maxConcurrentChars= (n)=>{
    if(n.length === 0){
        return ['', -1, 0];
    }
    const obj={
        character: n[0],
        position:0,
        length:1
    }
    for(let i=0;i<n.length-1;i++){
        const key = n[i];
        let count=1;

        for(let j=i+1;j<n.length;j++){
            if(n[j] === key){
                count++;
                if(count> obj.length){
                    obj.character = key;
                    obj.position = i;
                    obj.length = count;
                }
                continue;
            }else{
                break;
            }
        }
    }
    return [obj.character, obj.position, obj.length];
}

const stringSets = [
   {
       providedString: '',
       expectedResponse:  ['', -1, 0]
   },
   {
    providedString: '111000000',
    expectedResponse: ['0', 3, 6]
    },
    {
        providedString: '0000011112222',
        expectedResponse: ['0', 0, 5]
    },
    {
        providedString: '111111222223333333333333344455555',
        expectedResponse: ['3', 11, 14]
    },
]

function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

for(let counter=0;counter<stringSets.length;counter++){
    const result = maxConcurrentChars(stringSets[counter].providedString)
    if(arrayEquals(stringSets[counter].expectedResponse,result)){
       console.log("Test passed for ",stringSets[counter].providedString)
    }else{
        console.log("Test Failed for ",stringSets[counter].providedString)
    }
}