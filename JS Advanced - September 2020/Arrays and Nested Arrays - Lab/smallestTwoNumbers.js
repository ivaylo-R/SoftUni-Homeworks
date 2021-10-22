function solve(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
           if (arr[k]>arr[k+1]) {
               let temp=arr[k];
               arr[k]=arr[k+1];
               arr[k+1]=temp;
           }
        }
    }

    console.log(arr[0]+' '+arr[1]);
}

solve([30, 15, 50, 5]);