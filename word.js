const textElem = document.querySelector('.input');
const displaySentenceLength = document.querySelector('.sentenceLength')
const displaySentence = document.querySelector('.wordSentence')
const highlightedWords = document.querySelector('.highlight')
let wordsMoreThanFourArr = '';

const wordGame = () => {
    const sentence = textElem.value

    const newArray = sentence.split(' ');

    newArray.forEach(element => {
        if (element.length > 4) {
            wordsMoreThanFourArr += `<mark>${element}</mark> `
        }
        else{
        wordsMoreThanFourArr += `${element} `
        }
    });
    
    if (sentence) {
        const lengthOfSentence = sentence.split(" ").length;
        displaySentenceLength.innerHTML =`Number of words in a sentence : ${lengthOfSentence}` 
    }

    displaySentence.innerHTML = `Words that have more than 4 characters : ${wordsMoreThanFourArr}`
}