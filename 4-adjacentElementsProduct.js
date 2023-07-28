function solution(inputArray) {
    let largest = inputArray[0] * inputArray[1]
    for (let i = 1; i<inputArray.length; i++){
        let product = inputArray[i] * inputArray[i+1];
        if (product > largest){
            largest = product;
        }
    }
    return largest
}

//tests
console.log(solution([3, 6, -2, -5, 7, 3]))