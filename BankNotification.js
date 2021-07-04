// https://www.hackerrank.com/challenges/fraudulent-activity-notifications

const findMedian = (e)=>{
    e = e.sort();
    let median =0;
    if(e.length%2 !== 0){
         median =  e[Math.floor(e.length/2)];
       
    }
    else {
         median =  (e[Math.floor(e.length/2)] +  e[Math.floor(e.length/2)+1])/2;
    }
     return median;
};

const calcNotice = (expenditure, d)=>{
    let countNotice = 0;
    for(let i=0;i<expenditure.length;i++){
        if(i<d-1){
         continue;   
        }
        let start = i-d+1;
        let endIndex = i+1;
        let slicedExpenses = expenditure.slice(start,endIndex);
        let median = findMedian(slicedExpenses);
        if(expenditure[i] >= median*2){
            countNotice++;
        }
    }
    return countNotice;
}

console.log(calcNotice([2,3,4,2,3,6,8,4,5], 5))
console.log(calcNotice([1,2,3,4,4], 4))