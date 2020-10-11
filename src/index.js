module.exports = function toReadable (number) {
    let numUpToNine = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
    'seven', 'eight', 'nine'];
    let numUpToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numInWords = '';
    if (number === 0) {
        return 'zero';
    }
    if (number <= 19) {
        return numUpToNineteen[number];
    }

    if (number >= 20 && number <= 99) {
        return (number % 10) === 0? `${tens[Math.trunc(number / 10) - 2]}`:`${tens[Math.trunc(number / 10) - 2]} ${numUpToNine[number % 10]}`
    }

    if (number >=100 && number <= 999) {
        if ((number % 100) === 0) return `${numUpToNine[Math.trunc(number / 100)]} hundred`;
        if ((number % 100) <= 19) return `${numUpToNine[Math.trunc(number / 100)]} hundred ${numUpToNineteen[(number % 100)]}`;
        if ((number % 10) === 0) return `${numUpToNine[Math.trunc(number / 100)]} hundred ${tens[(Math.trunc(number % 100) / 10) - 2]}`;
        return `${numUpToNine[Math.trunc(number / 100)]} hundred ${tens[Math.trunc((number % 100) / 10) - 2]} ${numUpToNine[number % 10]}`;
    }
}