function solution(inputArray) {
    var counter = 0
    var array = []
    for (var i = 0; i<inputArray.length; i++){
        if (inputArray[i].length > counter){
            counter = inputArray[i].length;
        }
    }
    for (var i = 0; i<inputArray.length; i++){
        if (inputArray[i].length == counter){
            array.push(inputArray[i]);
        }
    }
    return array
}

//tests
console.log(solution(["aba", 
"aa", 
"ad", 
"vcd", 
"aba"]));
console.log(solution(["aa"]));