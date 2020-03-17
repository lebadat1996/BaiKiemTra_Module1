let intArray = [1, 2, 3, 1, 4,5,7];
function tryRemoveFromArray(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            array.splice(i, 1);
        }
    }
    document.write(array);
}
tryRemoveFromArray(intArray, 7);