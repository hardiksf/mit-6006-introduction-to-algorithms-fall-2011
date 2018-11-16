//find a peak in a 2D array




const peak = numbers => {
    const length = numbers[0].length;

    if (length === 1) {
        const allElementsAtThisColumn = numbers.map(x => x[0]);
        const maxOfThisColumn = Math.max(...allElementsAtThisColumn);
        return allElementsAtThisColumn[allElementsAtThisColumn.indexOf(maxOfThisColumn)];
    }

    //pick middle column
    const middleColumnIndex = Math.floor(length / 2);
    let elementsAtMiddleColumn = numbers.map(x => x[middleColumnIndex]);
    //max of middle column
    const maxOfMiddleColumn = Math.max(...elementsAtMiddleColumn);
    const indexOfMaxOfMiddleColumn = elementsAtMiddleColumn.indexOf(maxOfMiddleColumn);

    let start = 0;
    let end = length;
    if (numbers[indexOfMaxOfMiddleColumn][middleColumnIndex - 1] > numbers[indexOfMaxOfMiddleColumn][middleColumnIndex]) {
        end = middleColumnIndex;
    } else if (numbers[indexOfMaxOfMiddleColumn][middleColumnIndex + 1] > numbers[indexOfMaxOfMiddleColumn][middleColumnIndex]) {
        start = middleColumnIndex;
    } else {
        return maxOfMiddleColumn;
    }

    let reducedNumbers = [];
    for (let i = 0; i < length; i++) {
        reducedNumbers.push(numbers[i].slice(start, end));
    }
    numbers = reducedNumbers;

    return peak(numbers);

};

numbers = [
    [10, 8, 10, 10],
    [14, 13, 12, 11],
    [15, 9, 11, 21],
    [16, 17, 19, 20]
];

console.log(peak(numbers));