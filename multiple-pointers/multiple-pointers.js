function sumZero(array) {
    let lookup = {};
    let response;

    for (let i = 0; i < array.length; i++) {
        const arrElement = Math.abs(Number(array[i]));
        if (lookup[arrElement]) {
            response = [(arrElement * -1), arrElement];
            break;
        } else {
            lookup[arrElement] = 1;
        }
    }
    return response;
}

function sumZeroRefactor(array) {
    let left = 0, rigth = array.length - 1;

    while(left < rigth) {
        const sum = Number(array[left]) + Number(array[rigth]);
        if(sum === 0) {
            return [array[left], array[rigth]];
        } else if(sum > 0) {
            rigth--;
        } else {
            left++;
        }
    }
}


function validMultiplePointers() {
    const dataArray = document.getElementById('dataArray').value;
    if(!dataArray) { return; }
    // let result = sumZero(dataArray.split(','));
    const result = sumZeroRefactor(dataArray.split(',')); // the array should be in asc order
    document.getElementById('testMultiplePointers').innerText = result;
}

/******************************************** COUNT UNIT VALUES ******************/

function countUniqValues(array){
    const lookup = {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        lookup[element] = 1;
    }
    return Object.keys(lookup).length;
}

function validCountUniqValues() {
    const array = document.getElementById('countUniqArray').value;
    const arrayNumber = !array ? [] : array.split(',').map(data => Number(data));
    const result = countUniqValues(arrayNumber);
    document.getElementById('countUniqArrayResult').innerText = result;
}