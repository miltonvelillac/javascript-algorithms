function maxSubArraySum(arr, consecutives) {
    if(arr.length < consecutives) {return 'null';}
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length - consecutives + 1; i++) {
        let maxSumIteration = 0;
        for (let j = 0; j < consecutives; j++) {   
            maxSumIteration += arr[i + j];
        }
        if(maxSum < maxSumIteration) {
            maxSum = maxSumIteration;
        }        
    }
    return maxSum;
}

function maxSubArraySumRefactor(arr, consecutives) {
    if(arr.length < consecutives) {return 'null';}
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < consecutives; i++) {
        maxSum += arr[i];        
    }
    tempSum = maxSum;

    for (let i = 0; i < array.length; i++) {
        tempSum = tempSum - arr[i - consecutives] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
        
    }
    return maxSum;
}

function maxSubArraySumValiate() {
    const dataArray = document.getElementById('dataArray').value;
    const iterations = Number(document.getElementById('iterationsField').value);
    const numbers = dataArray.split(',').map(data => Number(data));
    let result = maxSubArraySumRefactor(numbers, iterations);
    document.getElementById('testResult').innerText = result;
}