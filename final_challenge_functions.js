// Prime Number Fucntion
function checkPrime(number) {
    if (number < 4) {
        return "Prime"
    } else if (number < 2 || number % 1 != 0 || number == 0) {
        return "Not a Valid Input"
    } else(number % 1 == 0)
    for (i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return "Not Prime"
        }


    }
    return "Prime"
}

//
