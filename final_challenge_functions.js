// Prime Number Fucntion
function checkPrime(number) {
    if (number < 2 || number % 1 != 0 || number == 0) {
        return "Not a Valid Input"
    } else if (number < 4) {
        return "Prime"
    } else(number % 1 == 0)
    for (i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return "Not Prime"
        }


    }
    return "Prime"
}

//Times Table
function timesTable(number){
    var rows = number;
    var cells = number;
    document.write("<table>");
    for (i = 1; i <= rows; i++){
        document.write("<tr>");
        for(j = 1; j <= cells; j++){
            document.write("<td>", i * j, "<td>");
        }
    document.write("</tr>");
    }
    return ("</table>")
}

//Shuffle thing
function shuffle (someArray) {
    for ( var i = someArray.length - 1; i > 0; i--) {
         var j = Math.floor(Math.random() * (i + 1));
         var x = someArray[i];
        someArray[i] = someArray[j];
        someArray[j] = x;
    }
    return someArray;
}
