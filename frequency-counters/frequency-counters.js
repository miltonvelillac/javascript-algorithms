function squareFrequency(arr1, arr2) {
    if (arr1.length !== arr2.length) { return false; }
    for(let i = 0; i < arr1.length; i++) {
        const correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === - 1) { return false; }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

function squareFrequency(arr1, arr2) {
    if (arr1.length !== arr2.length) { return false; }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    
    for(let key in frequencyCounter1) {
        const keyFrequencyCounter2 = key ** 2;
        if(!(keyFrequencyCounter2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[keyFrequencyCounter2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

function getArrayValues() {
    const firstValue = document.getElementById('firstArray').value;
    const secondValue = document.getElementById('secondArray').value;

    const firstArray = arrayOfStringsToNumbers(firstValue.trim().split(','));
    const secondArray = arrayOfStringsToNumbers(secondValue.trim().split(',').map(val => Number(val)));
    return {firstArray, secondArray};
}

function testSquareFrequency() {
    const {firstArray, secondArray} = getArrayValues();
    const response = squareFrequency(firstArray, secondArray);
    document.getElementById('testSquareFrequencyResponse').innerText = `Result: ${response}`;
}

function testSquareFrequencyImprove() {
    const {firstArray, secondArray} = getArrayValues();
    const response = squareFrequencyImprove(firstArray, secondArray);
    document.getElementById('testSquareFrequencyResponse').innerText = `Result: ${response}`;
}

