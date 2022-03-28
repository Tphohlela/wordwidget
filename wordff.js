const wordFactoryFunction = (storedSentences) => {
    let arr = storedSentences || [];
    let storeAvg = 0

    const analyze = sentence => {
        let wordsMoreThanFourStr = '';
        let longList = "";
        let longestLength = 0;

        const words = sentence.split(' ');

        words.forEach(element => {

            if (longList.length <= element.length) {
                longList = element
            }
        });

        if (longList.includes('.')) {
            longestLength = longList.length - 1
        }
        else {
            longestLength = longList.length
        }

        words.forEach(element => {
            if (element.includes('.')) {
                if (longestLength == element.length - 1) {
                    wordsMoreThanFourStr += `<mark class="longword">${element}</mark> `
                }
                else if (element.length - 1 >= 5) {
                    wordsMoreThanFourStr += `<mark class="words">${element}</mark> `
                }
                else {
                    wordsMoreThanFourStr += `${element} `
                }
            }
            else {
                if (longestLength == element.length) {
                    wordsMoreThanFourStr += `<mark class="longword">${element}</mark> `
                }
                else if (element.length > 4) {
                    wordsMoreThanFourStr += `<mark class="words">${element}</mark> `
                }

                else {
                    wordsMoreThanFourStr += `${element} `
                }
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
        let longestLength = 0;

        words.forEach(element => {
            if (longList.length <= element.length) {
                longList = element
            }
        });

        if (longList.includes('.')) {
            longestLength = longList.length - 1
        }
        else {
            longestLength = longList.length
        }

        words.forEach(element => {
            if (element.includes('.')) {
                if (longestLength == element.length - 1 && longestLength > 4) {
                    str += `<mark class="longword">${element}</mark> `
                }
                else if (element.length - 1 == 5) {
                    str += `<mark class="words">${element}</mark> `
                }
            }
            else {
                if (longestLength == element.length && longestLength > 4) {
                    str += `<mark class="longword">${element}</mark> `
                }

                else if (element.length > 4) {
                    str += `<mark class="words">${element}</mark> `
                }

            };
        });
        return str;
    }

    const storeFiveSentences = sentenceVal => {

        const lengthOfSentence = sentenceVal.split(" ").length;
       
        if (arr.some(element => element.sentence === sentenceVal)) {
            return arr;
        }
        else {
            if (arr[4]) {
                arr.splice(0, 1);
                arr.push({
                    sentence: sentenceVal,
                    length: lengthOfSentence
                })
            }
            else {
                arr.push({
                    sentence: sentenceVal,
                    length: lengthOfSentence
                })
            }

        }
        return arr;
    }

     const averageNumber = () => {
        let avgNum = 0
        let numberOfSentences = 0

        arr.forEach(element => {
            avgNum += element.length
            numberOfSentences += 1
        })

        storeAvg = Math.round(avgNum / numberOfSentences);
        return storeAvg
    }

    const showingAvgForLastSentence = () => {
       averageNumber()
     
        let latestSentence = arr[arr.length - 1];
        let dot = ''
        if (latestSentence.length == storeAvg) {
            dot += ''
        }
       else if (latestSentence.length > storeAvg) {
            dot += '🟢'
        }
        else if (latestSentence.length < storeAvg) {
            dot += '🟠'
        }
        return dot
    }

    return {
        analyze,
        highlightedWords,
        numberOfWordsInSentence,
        storeFiveSentences,
        averageNumber,
        showingAvgForLastSentence,
    }
}