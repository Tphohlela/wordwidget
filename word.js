const textElem = document.querySelector('.input')
const displaySentenceLength = document.querySelector('.sentenceLength')
const displaySentence = document.querySelector('.wordSentence')
const highlightedWords = document.querySelector('.highlight')
const errorElem = document.querySelector('.error')
const checkBox = document.querySelector('.checkbox')
const longestWords = document.querySelector('.longestWordsDisplay')
const displayFiveSentences = document.querySelector('.displayFiveSentences')

const wordInstance = wordFactoryFunction();

// var user = {
//     author : true,
//     firstName : "Jo",
//     lastName : "Blogss"
//    };

// var templateString = document.querySelector('.entry').innerHTML;

// var templateInstance = Handlebars.compile(templateString);

// var html = templateInstance(user);

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
        // displayFiveSentences.innerHTML = wordInstance.storeFiveSentences(sentence)
    }    
}

const hideAndHighlight = () => {

    const sentence = textElem.value

    console.log('asdbgnhmj,ksdfghjkl'+sentence)

    if(checkBox.checked == false){
        displaySentence.innerHTML = wordInstance.analyze(sentence)
        displaySentenceLength.innerHTML = wordInstance.numberOfWordsInSentence(sentence)      
    }
    else if(checkBox.checked == true && textElem.value == ""){
        errorElem.innerHTML = 'Please enter a sentence that has more than 5 words'
        setTimeout(() => errorElem.innerHTML = "", 5000);
    }
    else if(checkBox.checked == true){
        displaySentence.innerHTML = `Showing only highlighted words : ${wordInstance.highlightedWords(sentence)}`
        displaySentenceLength.innerHTML = wordInstance.numberOfWordsInSentence(sentence) 
    }
}