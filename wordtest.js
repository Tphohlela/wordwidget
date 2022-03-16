describe('Word game factory function', () => {
    describe('Analyze button', () => {
        it('should highlight the words (using mark tag) that are have more than 4 characters', () => {
            const word = wordFactoryFunction();

            assert.equal('Words that have more than 4 characters : Are you <mark>having</mark> a <mark>great</mark> day ', word.analyze('Are you having a great day'));
        });
        it('should highlight the words (using mark tag) that are have more than 4 characters', () => {
            const word = wordFactoryFunction();

            assert.equal('Words that have more than 4 characters : <mark>Spinach</mark> is <mark>green</mark> and <mark>delicious</mark> ', word.analyze('Spinach is green and delicious'));
        });
        it('should return the number of words in a sentence', () => {
            const word = wordFactoryFunction();

            assert.equal('Number of words in a sentence : 5', word.numberOfWordsInSentence('Spinach is green and delicious'));
        });
        it('should return the number of words in a sentence', () => {
            const word = wordFactoryFunction();

            assert.equal('Number of words in a sentence : 6', word.numberOfWordsInSentence('Are you having a great day'));
        });
    })

    describe('Displaying only highlighted words', () => {
        it('should only display the highlighted words (using mark tag) that are have more than 4 characters', () => {
            const word = wordFactoryFunction();

            assert.equal('Longest words: <mark>Spinach</mark> <mark>green</mark> <mark>delicious</mark>  ', word.highlightedWords('<mark>Spinach</mark> is <mark>green</mark> and <mark>delicious</mark> '));
        });

        it('should only display the highlighted words (using mark tag) that are have more than 4 characters', () => {
            const word = wordFactoryFunction();

            assert.equal('Longest words: <mark>having</mark> <mark>great</mark>  ', word.highlightedWords('Are you <mark>having</mark> a <mark>great</mark> day '));
        });
    })

    describe('Longest word', () => {
        it('should return the longest word which is "having"', () => {
            const word = wordFactoryFunction();

            assert.equal('having', word.longestWord('Are you having a great day'));
        });
        it('should return the longest word which is "coding"', () => {
            const word = wordFactoryFunction();

            assert.equal('delicious', word.longestWord('Spinach is green and delicious'));
        });
    })
});