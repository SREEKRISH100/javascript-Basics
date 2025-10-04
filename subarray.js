function ArrayCheck (arr,size){
    if(size<=0){
        return [];
    }

    if(size>= arr.length){
        size=arr.length;
    }

    subarry=[]
    for(i=0;i<size;i++){
        subarry[i]=arr[i]
    }
    return subarry;
}
console.log(ArrayCheck([1,2,3,4],3))
