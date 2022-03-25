describe('Word game factory function', () => {
    describe('Analyze section', () => {
        it('should highlight the words (using mark tag) that are have more than 4 characters and/or the longest and the other words should not be highlighted', () => {
            const word = wordFactoryFunction();

            assert.equal('Sentence analyzed : Are you <mark class="longword">having</mark> a <mark class="words">great</mark> day ', word.analyze('Are you having a great day'));
        });
        it('should highlight the words (using mark tag) that are have more than 4 characters and/or the longest and the other words should not be highlighted', () => {
            const word = wordFactoryFunction();

            assert.equal('Sentence analyzed : <mark class="words">Spinach</mark> is <mark class="words">green</mark> and <mark class="longword">delicious</mark> ', word.analyze('Spinach is green and delicious'));
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

    describe('Hide and highlight section', () => {
        it('should only display the highlighted words (using mark tag) that are have more than 4 characters and/or the longest words', () => {
            const word = wordFactoryFunction();

            assert.equal('<mark class="words"><mark>Spinach</mark></mark> <mark class="words"><mark>green</mark></mark> <mark class="longword"><mark>delicious</mark></mark> ', word.highlightedWords('<mark>Spinach</mark> is <mark>green</mark> and <mark>delicious</mark> '));
        });

        it('should only display the highlighted words (using mark tag) that are have more than 4 characters and/or the longest words', () => {
            const word = wordFactoryFunction();

            assert.equal('<mark class="longword"><mark>having</mark></mark> <mark class="words"><mark>great</mark></mark> ', word.highlightedWords('Are you <mark>having</mark> a <mark>great</mark> day '));
        });
    })

    describe('Keep Track section', () => {
        it('should add a sentence to array and the sentence length', () => {
            const word = wordFactoryFunction();

            assert.deepEqual([{ sentence: 'Are you having a great day', length: 6 }], word.storeFiveSentences('Are you having a great day'));
        });
        it('should add sentences to array and each sentences lengths', () => {
            const word = wordFactoryFunction();
            word.storeFiveSentences('Are you having a great day')
            const result = word.storeFiveSentences('Spinach is green and delicious')

            assert.deepEqual([{ sentence: 'Are you having a great day', length: 6 }, { sentence: 'Spinach is green and delicious', length: 5 }], result);
        });
        it('should have the latest five sentences', () => {
            const word = wordFactoryFunction();

            word.storeFiveSentences('Are you having a great day')
            word.storeFiveSentences('Beyonce is a superstar and is amazing')
            word.storeFiveSentences('When is winter coming in Cape Town')
            word.storeFiveSentences('We must recognize that spinach is delicious')
            word.storeFiveSentences('Hello my name is Thato')
            const result = word.storeFiveSentences('Spinach is green and delicious')

            assert.equal('Beyonce is a superstar and is amazing', result[0].sentence);
        });

    })

    describe('Average number section', () => {
        it('should get the average number of words for the sentences', () => {
            const word = wordFactoryFunction();

            word.storeFiveSentences('Are you having a great day')
            word.storeFiveSentences('Beyonce is a superstar and is amazing')
            word.storeFiveSentences('When is winter coming in Cape Town')

            assert.equal(7, word.averageNumber());
        });

        it('should get the average number of words for the sentences', () => {
            const word = wordFactoryFunction();

            word.storeFiveSentences('Are you having a great day')
            word.storeFiveSentences('Beyonce is a superstar and is amazing')
            word.storeFiveSentences('When is winter coming in Cape Town')
            word.storeFiveSentences('We must recognize that spinach is delicious')
            word.storeFiveSentences('Hello my name is Thato')

            assert.equal(6, word.averageNumber());
        });

        it('should show a orange dot if last sentence average is less than the average number for all the sentences ', () => {
            const word = wordFactoryFunction();

            word.storeFiveSentences('Are you having a great day')
            word.storeFiveSentences('Beyonce is a superstar and is amazing')
            word.storeFiveSentences('When is winter coming in Cape Town')
            word.storeFiveSentences('We must recognize that spinach is delicious')
            word.storeFiveSentences('Hello my name is Thato')

            word.averageNumber()

            assert.equal('<span class="orangedot"></span>', word.showingAvgForLastSentence().dots);
        });

        it('should show a green dot if last sentence average is greater than the average number for all the sentences ', () => {
            const word = wordFactoryFunction();

            word.storeFiveSentences('Are you having a great day')
            word.storeFiveSentences('Beyonce is a superstar and is amazing')
            word.storeFiveSentences('When is winter coming in Cape Town')
            word.storeFiveSentences('We must recognize that spinach is delicious and yummy')

            word.averageNumber()

            assert.equal('<span class="greendot"></span>', word.showingAvgForLastSentence().dots);
        });
    })

});