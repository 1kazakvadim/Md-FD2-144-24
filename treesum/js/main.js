let testArray = [ 5, 7,
    [ 4, [2], 8, [1,3], 2 ],
    [ 9, [] ],
    1, 8 ]

alert(treeSum(testArray))

function treeSum(array) {
    let result = 0;

    for (let element of array) {
        if (Array.isArray(element)) {
            result += treeSum(element);
        } else if (typeof element === 'number') {
            result += element;
        }
    }

    return result;
}