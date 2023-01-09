const firstLevelLiterals = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
]

const secondLevelLiterals = [
    '', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety',
]


function toReadable(number) {
    let result = '', divident = 0
    
    if (number < 20) { return firstLevelLiterals[number] }

    divident = Math.floor(number / 100)

    if (divident > 0) {
        result += ` ${firstLevelLiterals[divident]} hundred`
        number = number % 100

        if (number === 0) { return result.trim() }
    }

    divident = Math.floor(number / 10)

    if (number < 20) {
        result += ` ${firstLevelLiterals[number]}`
    } else {
        divident = Math.floor(number / 10)
        result += ` ${secondLevelLiterals[divident]}`
        number = number % 10
        
        if (number !== 0) {
            result += ` ${firstLevelLiterals[number]}`
        }
    }

    return result.trim()
}

module.exports = toReadable
