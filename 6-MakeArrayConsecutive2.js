function solution(statues) {
    statues.sort(function(a, b) {
        return a - b;
    });
    var contador = 0;
    for (let i = 0; i < statues.length - 1; i++) {
        if (statues[i + 1] - statues[i] !== 1) {
            var x = (statues[i + 1] - statues[i]) - 1;
            contador += x;
        }
    }
    return contador;
}

//tests
console.log(solution([6, 2, 3, 8]));