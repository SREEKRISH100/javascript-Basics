function ArrayLarge(arr){
    find=arr[0];

    for(i=  1;i<arr.length;i++){
        if(arr[i]>find)
        {
            find=arr[i]
        }
    }
return find;

}
console.log(ArrayLarge([1,2]))
