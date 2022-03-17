describe('Word game factory function', () => {
    describe('Analyze button', () => {
        it('should highlight the words (using mark tag) that are have more than 4 characters', () => {
            const word = wordFactoryFunction();

            assert.equal('Words that have more than 4 characters : Are you <mark class="words">having</mark> a <mark class="words">great</mark> day ', word.analyze('Are you having a great day'));
        });
        it('should highlight the words (using mark tag) that are have more than 4 characters', () => {
            const word = wordFactoryFunction();

            assert.equal('Words that have more than 4 characters : <mark class="words">Spinach</mark> is <mark class="words">green</mark> and <mark class="words">delicious</mark> ', word.analyze('Spinach is green and delicious'));
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

            assert.equal('<mark class="words"><mark>Spinach</mark></mark> <mark class="words"><mark>green</mark></mark> <mark class="words"><mark>delicious</mark></mark> ', word.highlightedWords('<mark>Spinach</mark> is <mark>green</mark> and <mark>delicious</mark> '));
        });

        it('should only display the highlighted words (using mark tag) that are have more than 4 characters', () => {
            const word = wordFactoryFunction();

            assert.equal('<mark class="words"><mark>having</mark></mark> <mark class="words"><mark>great</mark></mark> ', word.highlightedWords('Are you <mark>having</mark> a <mark>great</mark> day '));
        });
    })

    describe('Longest word', () => {
        it('should return the longest word which is "having"', () => {
            const word = wordFactoryFunction();

            assert.equal('Are you <mark class="longword">having</mark> a great day ', word.longestWord('Are you having a great day'));
        });
        it('should return the longest word which is "delicious"', () => {
            const word = wordFactoryFunction();

            assert.equal('Spinach is green and <mark class="longword">delicious</mark> ', word.longestWord('Spinach is green and delicious'));
        });
        it(`should return words that have the longest length which are "delicious" and "recognize"`, () => {
            const word = wordFactoryFunction();

            assert.deepEqual('We must <mark class="longword">recognize</mark> that spinach is <mark class="longword">delicious</mark> ', word.longestWord('We must recognize that spinach is delicious'));
        });
    })
});