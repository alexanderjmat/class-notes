/* Binary Search */

function binarySearch(sortedArr, n) {
    if (sortedArr.length == 0) {
        console.log('Not found')
        return -1;
    }
    let middleIndex = sortedArr[Math.round((sortedArr.length / 2) - 1)]
    if (middleIndex == n) {
        console.log(middleIndex)
        return -1;
    }
    else if (middleIndex != n) {
        if (middleIndex > n) {
            return binarySearch(sortedArr.slice(0, middleIndex), n)
        }
        if (middleIndex < n) {
            return binarySearch(sortedArr.slice(middleIndex), n)
        }
    }
}