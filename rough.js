function display(arr){
if (arr == ""){
    return `Hello It is a empty Array`;
}
else{
    const val = arr.map(function(x){
        return x;
    })
    return val;
}
    

}
