let array=[1,2,3,4,5,6,7,8,10];
function finMax(max) {
    max = array[0];
    for (let i=0;i<array.length;i++){
        if (max<array[i]){
            max=array[i];
        }
    }
    alert(max);
}
finMax();