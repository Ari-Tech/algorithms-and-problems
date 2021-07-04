const binarySearch = (ar, ele, left, right)=>{
        if(left<=right){
            let mid = left+Math.floor((right-left)/2);
            if(ar[mid] === ele)   {
                return mid;
            } 
            if(ele<ar[mid]){
               return binarySearch(ar, ele, left, mid-1 )
            }
            if(ele>ar[mid]){
               return binarySearch(ar,ele, mid+1, right )
            }
        }
   
     return -1;
}

const findELe  = (ar, ele)=>{
    let left=0;
    let right = ar.length-1;
    const result = binarySearch(ar,ele, left, right);
 console.log(result===-1?"Not Found": "Found:"+result)
}
findELe([], -20);
findELe([-20], -20);
findELe([-30, -20, 0 ,20], -20);
findELe([-20, -11, 0, 4 ,5,7,8, 9, 11],7);
findELe([20, 30, 40, 50], 50);

