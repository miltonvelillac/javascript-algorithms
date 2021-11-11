function validAnagram(firstWord, secondWord){
    if (!firstWord && !secondWord) {
        return true;
    } else if (firstWord.length !== secondWord.length) {
        return false;
    } else {
        let lookup = {};

        for (let i = 0; i < firstWord.length; i++) {
            const letter = firstWord[i];
            lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
        }
        console.log(lookup);

        for (let i = 0; i < secondWord.length; i++) {
            const letter = secondWord[i];
            if(!lookup[letter]) { return false; }
            else { lookup[letter] -= 1; }
        }

        return true;
    }    
}


function validAnagramDisplay(){
    const firstWord = document.getElementById('firstWord').value;
    const secondWord = document.getElementById('secondWord').value;
    let result = validAnagram(firstWord, secondWord) ? 'True' : 'False';
    document.getElementById('testAnagramResponse').innerText = result;
}