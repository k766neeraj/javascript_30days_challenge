// 4. Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array


function binarySearch(arr, left, right, target) {
    if (left > right) {
        console.log("Not found")
        return
    }
    let mid = Math.floor(left + (right - left) / 2)
    if (arr[mid] == target) {
        console.log(`index of ${target} is:`, mid)
        return
    }
    else if (arr[mid] > target) {

        binarySearch(arr, left, mid - 1, target)
    }
    else {

        binarySearch(arr, mid + 1, right, target)
    }
}

arr = [11, 24, 27, 28, 30]
target = 30

binarySearch(arr, 0, arr.length - 1, target)

target = 18
binarySearch(arr, 0, arr.length - 1, target)




function findOccurence(arr, n, target) {
    if (n == -1) {
        return 0
    }
    if (arr[n] == target) {
        return 1 + findOccurence(arr, n - 1, target)
    }
    return findOccurence(arr, n - 1, target)
}

arr = [1, 2, 3, 3, 4, 2, 5, 4, 6, 2, 5, 7]
target = 5
console.log(findOccurence(arr, arr.length - 1, target))
target = 1
console.log(findOccurence(arr, arr.length - 1, target))


