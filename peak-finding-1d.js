//find a peak in an array
const peak = numbers => {
    const length = numbers.length;
    if (length === 1) {

        return numbers[0];
    }
    //divide array into 2
    const mid = Math.floor(length / 2);
    let start = 0;
    let end = length;
    if (numbers[mid - 1] > numbers[mid]) {
        end = mid;
    } else if (numbers[mid + 1] > numbers[mid]) {
        start = mid
    } else {
        return numbers[mid];
    }
    return peak(numbers.slice(start, end));
};

numbers = [5, 5, 5, 8, 2];
console.log(
    peak(numbers));