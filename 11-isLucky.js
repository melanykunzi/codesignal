function solution(n) {
    var firstHalfCount = 0
    var secondHalfCount = 0
    var numberString = n.toString().split('').map(Number);
    for (var i = 0; i<numberString.length; i++){
        if (i <= numberString.length/2-1){
            firstHalfCount = firstHalfCount + numberString[i]
        } else {
            secondHalfCount = secondHalfCount + numberString[i]
        }
    }
    if (firstHalfCount === secondHalfCount){
        return true
    } else {
        return false
    }
}

//tests
console.log(solution(1230));
console.log(solution(239017));