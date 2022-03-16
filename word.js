const textElem = document.querySelector('.input');
const displaySentenceLength = document.querySelector('.sentenceLength')
const displaySentence = document.querySelector('.wordSentence')
const highlightedWords = document.querySelector('.highlight')
const errorElem = document.querySelector('.error')
const checkBox = document.querySelector('.checkbox')

const wordGame = () => {

    let wordsMoreThanFourStr = '';

    const sentence = textElem.value
    const newArray = sentence.split(' ');
    
    if (newArray[4] == undefined) {
        errorElem.innerHTML = 'Please enter a sentence that has more than 5 words'
        setTimeout(() => errorElem.innerHTML = "", 5000);
    }

    else if (newArray[4] != undefined) {
        newArray.forEach(element => {
            if (element.length > 4) {
                wordsMoreThanFourStr += `<mark>${element}</mark> `
            }
            else {
                wordsMoreThanFourStr += `${element} `
            }
        });

        const lengthOfSentence = sentence.split(" ").length;
        displaySentenceLength.innerHTML = `Number of words in a sentence : ${lengthOfSentence}`

        displaySentence.innerHTML = `Words that have more than 4 characters : ${wordsMoreThanFourStr}`
    }    
}

const hideAndHighlight = () => {

    let str = '';

    if(checkBox.checked == true){
        const findLongWord = displaySentence.innerHTML.split(' ')

        findLongWord.forEach(element => {
            if (element.startsWith("<")) {
                str += `${element} `
            }
        });
        displaySentence.innerHTML = `Longest words: ${str} `
    }
}

