import { Box, Container, TextField, Button, Stack } from "@mui/material";

const DSA = () => {

    const fibonacci = (num) => {
        let fib1 = 0
        let fib2 = 1
        console.log({ fib1 })
        console.log({ fib2 })
        if (num <= 1) return
        let i = 2
        while (i < num) {
            let newfib = fib1 + fib2
            console.log({ newfib })
            fib1 = fib2
            fib2 = newfib
            num = num - 1
        }
    }

    // console.log(fibonacci(20))

    const recursiveFibonacci = (num) => {
        // fn(num) = fn(num-1) + fn(num-2)
        if (num === 0) return 0
        if (num === 1) return 1
        if (num <= 1) {
            return num
        } else {
            const fib = recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2)
            return fib
        }
    }
    //print series

    let n = 10
    let fibSeries = []
    for (let i = 0; i < n; i++) {
        let f = recursiveFibonacci(i)
        fibSeries = [...fibSeries, "-", f]
    }

    //-----Bubble Sort----------
    // Go through the array, one value at a time.
    // For each value, compare the value with the next value.
    // If the value is higher than the next one, swap the values so that the highest value comes last.
    // Go through the array as many times as there are values in the array.

    const bubbleSortArray = (arr) => {
        let sortedArr = [...arr]
        let isSwapped = false
        let count = 0
        for (let i = 0; i < sortedArr.length - 1; i++) {
            for (let j = 0; j <= sortedArr.length - 1; j++) {
                if (sortedArr[j] > sortedArr[j + 1]) {
                    [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]]
                    count++
                    isSwapped = true
                }
            }
            if (!isSwapped) return

        }
        console.log({ count })
        return sortedArr;
    }

    let bubbleSortedArray = bubbleSortArray([12, 45, 23, 78, 4, 6, 9, 29, 90, 17])

    //-----Linear Search-------------

    const linearSearch = (arr, searchKey) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === searchKey) {
                return i
            }
        }
        return -1
    }

    let linearSearched = linearSearch([12, 45, 23, 78, 4, 6, 9, 29, 90, 17], 6)
    if (linearSearched === -1) {
        console.log(`Search Key not found`)
    } else {
        console.log(`Search key found at ${linearSearched}`)
    }

    //-----Binary Search-------------
    //     Check the value in the center of the array.
    // If the target value is lower, search the left half of the array. If the target value is higher, search the right half.
    // Continue step 1 and 2 for the new reduced part of the array until the target value is found or until the search area is empty.
    // If the value is found, return the target value index. If the target value is not found, return -1.

    const binarySearch = (arr, searchKey) => {

    }

    let binarySearched = binarySearch([12, 45, 23, 78, 4, 6, 9, 29, 90, 17], 6)

    return (
        <>
            <h2>DSA</h2>
            <p>Fibonacci Series : {fibSeries} </p>
            <hr></hr>
            <p>Bubble Sort Array : {bubbleSortedArray} </p>
            <hr></hr>
            <p>Linear Search found at index : {linearSearched} </p>
            <hr></hr>
            <p>Binary Search found at index : {binarySearched} </p>
        </>
    );
}

export default DSA;