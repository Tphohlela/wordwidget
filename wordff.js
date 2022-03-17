const wordFactoryFunction = () => {

    const analyze = sentence => {
        let wordsMoreThanFourStr = '';

        const words = sentence.split(' ');
       
        words.forEach(element => {
            if (element.length > 4) {
                wordsMoreThanFourStr += `<mark class="words">${element}</mark> `
            }
            else {
                wordsMoreThanFourStr += `${element} `
            }
        });
        return `Words that have more than 4 characters : ${wordsMoreThanFourStr}`;
    }

    const numberOfWordsInSentence = sentence => {
        const lengthOfSentence = sentence.split(" ").length;
        return `Number of words in a sentence : ${lengthOfSentence}`
    }

    const highlightedWords = sentence => {
        let str = '';
        const words = sentence.split(' ');

        words.forEach(element => {
            if (element.length > 4) {
                str += `<mark class="words">${element}</mark> `
            }
        });
        return str;
    }

    const longestWord = sentence => {
        const words = sentence.split(' ');
        let longList = "";
        let display = '';

        words.forEach(element => {
            if (longList.length <= element.length) {
                longList = element
            }
        });       
        words.forEach(element => {
            if (longList.length == element.length) {
                display += `<mark class="longword">${element}</mark> `
            }
            else {
                display += `${element} `
            }
        });
        return `${display}`;
    }

    return {
        longestWord,
        analyze,
        highlightedWords,
        numberOfWordsInSentence
    }
}