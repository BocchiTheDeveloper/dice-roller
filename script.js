let result = document.getElementById('result')

function getRollResult() {
    let resultText = document.getElementById('resultText');
    let randomNumberGenerator = Math.floor(Math.random() * 6) + 1;

    getDiceFace(randomNumberGenerator);
    resultText.textContent = `You got a ${randomNumberGenerator}`;
}

function getDiceFace(number) {
    if (number === 1) {
        result.textContent = '⚀';
    } else if (number === 2) {
        result.textContent = '⚁';
    } else if (number === 3) {
        result.textContent = '⚂';
    } else if (number === 4) {
        result.textContent = '⚃';
    } else if (number === 5) {
        result.textContent = '⚄';
    } else {
        result.textContent = '⚅'
    }
}

//yes i know this code is really messy please bear with me ;-;