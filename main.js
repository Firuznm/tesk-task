
 
function add(arr)
{
    sum=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            sum += arr[i];
        }
    }
   return sum;
}

const total=add([2,3,4,5]);
console.log(total);