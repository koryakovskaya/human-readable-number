function toReadable (number) {
    let one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve ','thirteen ',
    'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let tens = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    let great = ['', 'thousand ', 'million ', 'billion ', 'trillion '];
    let numInWords = '';

    for (let i = 0; i < great.length; i++) {
        let transNumber = number % (100 * Math.pow(1000, i));
        if (Math.floor(transNumber /(Math.pow(1000, i))) !== 0) {
            if (Math.floor(transNumber /(Math.pow(1000, i))) < 20) {
                numInWords = one[Math.floor(transNumber /(Math.pow(1000, i)))] + great[i] + numInWords;
            } else {
                numInWords = tens[Math.floor(transNumber /(10 * Math.pow(1000, i)))] +   
                one[Math.floor(transNumber /(Math.pow(1000, i))) % 10] + ' ' + great[i] + numInWords;
            }
        }

        transNumber = number % (Math.pow(1000, i + 1));
        if (Math.floor(transNumber / (100 * Math.pow(1000, i))) !== 0) 
        numInWords =  one[Math.floor(transNumber / (100 * Math.pow(1000,i)))] 
        + ' ' + 'hundred ' + numInWords;
    }

    return numInWords;
}