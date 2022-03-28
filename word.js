const textElem = document.querySelector('.input')
const displaySentenceLength = document.querySelector('.sentenceLength')
const displaySentence = document.querySelector('.wordSentence')
const highlightedWords = document.querySelector('.highlight')
const errorElem = document.querySelector('.error')
const checkBox = document.querySelector('.checkbox')
const longestWords = document.querySelector('.longestWordsDisplay')
const displayFiveSentences = document.querySelector('.displayFiveSentences')

let dataFromLocal

if (localStorage['store']) {
    dataFromLocal = JSON.parse(localStorage.getItem('store'));
} else {
    dataFromLocal = []
}
let arr = dataFromLocal;

const wordInstance = wordFactoryFunction(dataFromLocal);

const wordGame = () => {

    const sentence = textElem.value
    const newArray = sentence.split(' ');

    if (newArray[4] == undefined) {
        errorElem.innerHTML = 'Please enter a sentence that has more than 5 words'
        setTimeout(() => errorElem.innerHTML = "", 5000);
        displaySentence.innerHTML = ""
        displaySentenceLength.innerHTML = ""
    }
    else if (newArray[4] != undefined) {
        displaySentence.innerHTML = wordInstance.analyze(sentence)
        displaySentenceLength.innerHTML = wordInstance.numberOfWordsInSentence(sentence)
        var templateString = document.querySelector('.entry-template').innerHTML;
        console.log('validation' + wordInstance.storeFiveSentences(sentence))

        let context = {
            "sentences": wordInstance.storeFiveSentences(sentence),
            "dotVal" : wordInstance.showingAvgForLastSentence(),
            "avLength": wordInstance.averageNumber(),
        };
       
        console.log('dot' + JSON.stringify(wordInstance.showingAvgForLastSentence()))

        let templateScript = Handlebars.compile(templateString); 
        displayFiveSentences.innerHTML = templateScript(context);
        setTimeout(() => errorElem.innerHTML = "", 5000);

        localStorage['store'] = JSON.stringify(arr);
    //localStorage.clear()
    }
}

const hideAndHighlight = () => {

    const sentence = textElem.value

    if (checkBox.checked == false) {
        displaySentence.innerHTML = wordInstance.analyze(sentence)
        displaySentenceLength.innerHTML = wordInstance.numberOfWordsInSentence(sentence)
    }
    else if (checkBox.checked == true && textElem.value == "") {
        errorElem.innerHTML = 'Please enter a sentence that has more than 5 words'
        setTimeout(() => errorElem.innerHTML = "", 5000);
    }
    else if (checkBox.checked == true) {
        displaySentence.innerHTML = `Showing only highlighted words : ${wordInstance.highlightedWords(sentence)}`
        displaySentenceLength.innerHTML = wordInstance.numberOfWordsInSentence(sentence)
    }
}

displayFiveSentences.addEventListener('click',function(element) {
    console.log('checking: ' + JSON.stringify(element))

    if(element.target.className == 'eachSentence'){
        const specificSentence = element.target.textContent
        console.log(specificSentence)
        displaySentence.innerHTML = wordInstance.analyze(specificSentence)
        displaySentenceLength.innerHTML = wordInstance.numberOfWordsInSentence(specificSentence)
    }
})