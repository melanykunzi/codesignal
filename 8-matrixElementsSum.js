function solution(matrix) {
    var counter = 0;
    for (var i = 0; i<matrix.length; i++){
        for (var j = 0; j<matrix[i].length; j++){
            if (i == 0 && matrix[i][j] != 0){
                counter += matrix[i][j];
            } else if (i == 1 && matrix[i-1][j] != 0){
                counter += matrix[i][j];
            } else if (i == 2 && matrix[i-1][j] != 0 && matrix[i-2][j] != 0){
                counter += matrix[i][j];
            }
        }
    }
    return counter
}

//tests
console.log(solution([[0,1,1,2], [0,5,0,0], [2,0,3,3]]));
console.log(solution([[1,1,1], [2,2,2], [3,3,3]]));