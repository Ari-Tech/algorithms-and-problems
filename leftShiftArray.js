/*
input: a : Array
       d: how many times left shift. 

*/

// method 1

// function rotLeft(a, d) {
//     // Write your code here
//     let count=1;
//     while(count<=d){
//          let temp = a[0];
//         for(let i=0;i<a.length-1;i++){
//             a[i]=a[i+1];
//         }
//         a[a.length-1]=temp;
//         count++;
//     }
//       return a; 
// }

// method 2
// function rotLeft(a, d) {
//     // Write your code here
//    const finalArray=[...a];
//    function findLeftPos(pos, d){
//        let newPos = pos - d;
//        if(newPos<0){
//            newPos = a.length-Math.abs(newPos);
//        }
//        console.log("pos "+pos+" shifted to "+newPos)
//        return newPos;
//    }
//    for(let i=0;i<a.length;i++){
//        let changedPos = findLeftPos(i,d);
//        finalArray[changedPos] = a[i];
//    }
//    return finalArray;
// }


// method 3 - using slice


// How to left shift an array by "d" units using slice only
const rotLeft = (arr, d)=>{
    return [...arr.slice(d), ...arr.slice(0,d)];
}

console.log(rotLeft([1,2,3,4],2)); //  [ 3, 4, 1, 2 ]
console.log(rotLeft([1,2,3,4,5],3)); //  [ 4, 5, 1, 2, 3 ]



