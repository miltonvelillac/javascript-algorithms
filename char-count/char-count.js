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
