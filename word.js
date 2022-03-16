const textElem = document.querySelector('.input')
const displaySentenceLength = document.querySelector('.sentenceLength')
const displaySentence = document.querySelector('.wordSentence')
const highlightedWords = document.querySelector('.highlight')
const errorElem = document.querySelector('.error')
const checkBox = document.querySelector('.checkbox')
const wordInstance = wordFactoryFunction()

const wordGame = () => {
    
    const sentence = textElem.value
    const newArray = sentence.split(' ');
    
    if (newArray[4] == undefined) {
        errorElem.innerHTML = 'Please enter a sentence that has more than 5 words'
        setTimeout(() => errorElem.innerHTML = "", 5000);
    }
    else if (newArray[4] != undefined) {
        displaySentence.innerHTML = wordInstance.analyze(sentence)
        displaySentenceLength.innerHTML = wordInstance.numberOfWordsInSentence(sentence)
    }    
}

const hideAndHighlight = () => {

    if(checkBox.checked == true){
        const findLongWord = displaySentence.innerHTML

        displaySentence.innerHTML = wordInstance.highlightedWords(findLongWord)
        displaySentenceLength.innerHTML = ""
    }
}

