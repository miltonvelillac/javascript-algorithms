function getCharInput() {
    return document.getElementById('charInput')?.value;
}

function charCount() {
    const t0 = performance.now();
    const str = getCharInput();
    if (!str) { return; }
    const obj = {};
    for(let char of str) {
        if(/[A-Za-z0-9]/.test(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    const t1 = performance.now();
    console.log(obj, `Call charCount took ${t1 - t0} milliseconds.`);
}

function charCountImprove() {
    const t0 = performance.now();
    const str = getCharInput();
    if (!str) { return; }
    const obj = {};
    for(let char of str) {
        if(isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    const t1 = performance.now();
    console.log(obj, `Call charCountImprove took ${t1 - t0} milliseconds.`); // this is a little bit faster (using isAlphaNumeric function instead a regex)
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) // numeric (0-9)
        && !(code > 64 && code < 91) // upper alpha (A-Z)
        && !(code > 96 && code < 123) //lower alpha (a-z)
    ) {
        return false;
    }
        return true;    
}

