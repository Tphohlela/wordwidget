const wordFactoryFunction = () => {

    const analyze = sentence => {
        let wordsMoreThanFourStr = '';

        const words = sentence.split(' ');
       
        words.forEach(element => {
            if (element.length > 4) {
                wordsMoreThanFourStr += `<mark>${element}</mark> `
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
            if (element.startsWith("<")) {
                str += `${element} `
            }
        });
        return `Longest words: ${str} `;

    }

    const longestWord = sentence => {
        const words = sentence.split(' ');
        let longList = "";

        words.forEach(element => {
            if (longList.length <= element.length) {
                longList = element
            }
        });
        return longList
    }

    return {
        longestWord,
        analyze,
        highlightedWords,
        numberOfWordsInSentence
    }
}