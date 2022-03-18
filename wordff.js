const wordFactoryFunction = () => {
    let arr = [];

    const analyze = sentence => {
        const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        let cleanString = sentence.replace(regex, '');

        let wordsMoreThanFourStr = '';
        let longList = "";
        
        const words = cleanString.split(' ');

        words.forEach(element => {
            if (longList.length <= element.length) {
                longList = element
            }
        });

        words.forEach(element => {
            if (longList.length == element.length) {
                wordsMoreThanFourStr += `<mark class="longword">${element}</mark> `
            }
            else if (element.length > 4) {
                wordsMoreThanFourStr += `<mark class="words">${element}</mark> `
            }

            else {
                wordsMoreThanFourStr += `${element} `
            }
        });

        return `Sentence analyzed : ${wordsMoreThanFourStr}`;
    }

    const numberOfWordsInSentence = sentence => {
        const lengthOfSentence = sentence.split(" ").length;
        return `Number of words in a sentence : ${lengthOfSentence}`
    }

    const highlightedWords = sentence => {
        let str = '';
        let longList = "";
        const words = sentence.split(' ');

        
        words.forEach(element => {
            if (longList.length <= element.length) {
                longList = element
            }
        });
        
        words.forEach(element => {
            if (longList.length == element.length) {
                str += `<mark class="longword">${element}</mark> `
            }
            else if (element.length > 4) {
                str += `<mark class="words">${element}</mark> `
            }
        });
        return str;
    }

    const storeFiveSentences = sentence => {
    
        if(arr[4]){
            arr.splice(0, 1);
            arr.push(sentence)
        }
        else{
            arr.push(sentence)
        }
        return arr;
    }

    return {
        analyze,
        highlightedWords,
        numberOfWordsInSentence,
        storeFiveSentences
    }
}