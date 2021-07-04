// only can jump on 0 and not 1. Can jump 1 step or 2 step max. How many jumps to reach end

const jumpingOnClouds=(c)=> {
 let i=0;
 let jumps=0;
 while(i<c.length){
     // this is needed or else it will jump from last block
     if(i===c.length-1){
         break;
     }
     //trying two steps
     if(c[i+2]==0){
         jumps++;
         i+=2;
     }
    else{
         jumps++;
         i++; 
     }
     }
 return jumps;
}

console.log(jumpingOnClouds([0,0,1,0,0,1,0]));