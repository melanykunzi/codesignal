function solution(s1, s2) {
    var arr1 = s1.split('')
    var arr2 = s2.split('')
    var counter = 0;
    for (var i = 0; i<arr1.length; i++){
        var char = arr1[i]
        if (arr2.includes(char)){
            counter++
            arr2.splice(arr2.indexOf(char), 1);
        }
    }
    return counter
}

//tests
console.log(solution("aabcc", "adcaa"));
console.log(solution("zzzz", "zzzzzzz"));