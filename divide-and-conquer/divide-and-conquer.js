function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if(currentElement < val) {
            min = middle + 1;
        } else if(currentElement > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

function testSearch() {
    const dataArray = document.getElementById('dataArray').value;
    const numberToFind = Number(document.getElementById('numberToFind').value);
    const numbers = dataArray.split(',').map(data => Number(data));
    let result = search(numbers, numberToFind);
    document.getElementById('testResult').innerText = result;
}