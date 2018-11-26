//1. split each document into words
String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

const wordsFromDocument = doc => {
    //we care only about alphanumeric characters and space
    return doc.replaceAll(/[^a-zA-Z0-9 ]/g, ``).split(` `);
};

// 2. count word frequencies (document vectors)
const wordFrequencies = words => {
    const wordFrequencyMap = new Map();
    for (const word of words) {
        const lowerCaseWord = word.toLowerCase(); //We don't care about case sensitivity
        if (!wordFrequencyMap.has(lowerCaseWord)) {
            wordFrequencyMap.set(lowerCaseWord, 1);
        } else {
            wordFrequencyMap.set(lowerCaseWord, wordFrequencyMap.get(lowerCaseWord) + 1);
        }
    }
    return wordFrequencyMap;
};

// 3. compute dot product (& divide)
const dotProduct = (wordFrequencyMapOne, wordFrequencyMapTwo) => {
    let sum = 0;
    const wordOneSize = wordFrequencyMapOne.size;
    const wordTwoSize = wordFrequenciesTwo.size;

    if (wordOneSize < wordTwoSize) {
        for (let key of wordFrequencyMapOne.keys()) {
            if (wordFrequencyMapTwo.has(key)) {
                sum = sum + wordFrequencyMapOne.get(key) *
                    wordFrequencyMapTwo.get(key);
            }
        }
    } else {
        for (let key of wordFrequenciesTwo.keys()) {
            if (wordFrequenciesOne.has(key)) {
                sum = sum + wordFrequencyMapOne.get(key) *
                    wordFrequencyMapTwo.get(key);
            }
        }
    }
    return sum;
};

//vector angle = (dot(1, 2)) / Sqrt (dot(1, 1) * dot(2, 2))
const vectorAngle = (wordFrequencyMapOne, wordFrequencyMapTwo) => {
    const numerator = dotProduct(wordFrequencyMapOne, wordFrequencyMapTwo);
    const denominator = Math.sqrt(dotProduct(wordFrequencyMapOne, wordFrequencyMapOne) * (dotProduct(wordFrequenciesTwo, wordFrequenciesTwo)))
    return numerator / denominator;
}

const docOne = `a A A A A aaaaaa`;
const docTwo = `b a a a a aAAaaa`;

const wordsInDocOne = wordsFromDocument(docOne);
const wordsInDocTwo = wordsFromDocument(docTwo);

const wordFrequenciesOne = wordFrequencies(wordsInDocOne);
const wordFrequenciesTwo = wordFrequencies(wordsInDocTwo);

console.log(vectorAngle(wordFrequenciesOne, wordFrequenciesTwo));